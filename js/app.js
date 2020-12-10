'use strict';

//constructor funtions are object "factories"
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


const listSeattle = document.getElementById('seattle');
const listTokyo = document.getElementById('tokyo');
const listDubai = document.getElementById('dubai');
const listParis = document.getElementById('paris');
const listLima = document.getElementById('lima');
const storeTable = document.getElementById('table');
let tbodyElement = '';

const cityStores = [];

function Citystore(name, min, max, avg, parentList) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.parentList = parentList;
  this.hourlySales = [];
  this.dailyTotal = 0;
  cityStores.push(this);
}

Citystore.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Citystore.prototype.calculateHourlySales = function () {

  let x = Math.trunc(this.getRandomNumber() * this.avg);
  //adding the daily total.
  this.dailyTotal += x;
  this.hourlySales.push(x);
  return x;
};

Citystore.prototype.hoursCalc = function () {
  this.hourlySales[0];
  console.log(this.hourlySales[0]);
};

Citystore.prototype.renderTable = function () {
  //create Row and append to the DOM

  let trElement = document.createElement('tr');
  tbodyElement.appendChild(trElement);

  //create first column and append to the DOM
  let thElement = document.createElement('th');
  thElement.textContent = this.name;
  trElement.appendChild(thElement);

  //iterate through hourly totals and append to DOM
  let tdElement;
  for (let i = 0; i < hours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.calculateHourlySales();
    trElement.appendChild(tdElement);

  }
  //creating the daily totals column
  tdElement = document.createElement('td');
  tdElement.textContent = this.dailyTotal;
  trElement.appendChild(tdElement);
};

function renderHeader() {

  //creating the table head to sit inside table
  let theadElement = document.createElement('thead');
  storeTable.appendChild(theadElement);

  //creating the table row to sit inside table head
  let trElement = document.createElement('tr');
  theadElement.appendChild(trElement);

  //creating the th to go inside table row
  let thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  //for loop to iterate through the hours array
  for (let i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  // adding daily totals onto the end of the table
  thElement = document.createElement('th');
  thElement.textContent = 'Daily Total';
  trElement.appendChild(thElement);

}

//creating a body to for the table
function renderBody() {
  tbodyElement = document.createElement('tbody');
  storeTable.appendChild(tbodyElement);
}

//creating a foot for the table
function renderFoot() {
  let tfootElement = document.createElement('tfoot');
  storeTable.appendChild(tfootElement);

  let trElement = document.createElement('tr');
  tfootElement.appendChild(trElement);

  let thElement = document.createElement('th');
  thElement.textContent = 'Hourly Totals';
  trElement.appendChild(thElement);

  let totalofTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let allHourlyTotals = 0;

    for (let j = 0; j < cityStores.length; j++) {
      allHourlyTotals += cityStores[j].hourlySales[i];

    }
    totalofTotals += allHourlyTotals;
    console.log(totalofTotals);

    let tdElement = document.createElement('td');
    tdElement.textContent = allHourlyTotals;
    trElement.appendChild(tdElement);
    console.log(allHourlyTotals);
  }

  let tdElement = document.createElement('td');
  tdElement.textContent = totalofTotals;
  trElement.appendChild(tdElement);
}

//instaniations
new Citystore('Seattle', 23, 65, 6.3, listSeattle);
new Citystore('Tokyo', 3, 24, 1.2, listTokyo);
new Citystore('Dubai', 11, 38, 3.7, listDubai);
new Citystore('Paris', 20, 38, 2.3, listParis);
new Citystore('Lima', 2, 16, 4.6, listLima);


function renderAll() {
  for (let i = 0; i < cityStores.length; i++) {
    cityStores[i].renderTable();
  }
  renderFoot();
}
renderHeader();
renderBody();
renderAll();

