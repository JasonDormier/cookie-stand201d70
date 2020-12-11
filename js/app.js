'use strict';

//constructor funtions are object "factories"
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const cityStores = [];

//global varibles
const storeTable = document.getElementById('table');
const myForm = document.getElementById('form');
let tbodyElement = document.createElement('tbody');
let tfootElement = document.createElement('tfoot');

// event listeners
myForm.addEventListener('submit', handleSubmit);

function Citystore(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
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
  tbodyElement;
  storeTable.appendChild(tbodyElement);
}

//creating a foot for the table
function renderFoot() {
  tfootElement = document.createElement('tfoot');
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
    //console.log(totalofTotals);

    let tdElement = document.createElement('td');
    tdElement.textContent = allHourlyTotals;
    trElement.appendChild(tdElement);
    //console.log(allHourlyTotals);
  }

  let tdElement = document.createElement('td');
  tdElement.textContent = totalofTotals;
  trElement.appendChild(tdElement);
}

//creating an event handler to input data to the table
function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const min = event.target.min.value;
  const max = event.target.max.value;
  const avg = event.target.avg.value;

  // will create a new instance of the store when we press submit
  let newStore = new Citystore(name, min, max, avg);

  //calling our new instance and prototype method
  newStore.renderTable();

  //clearing the tfoot table and rendering
  storeTable.removeChild(tfootElement);
  renderFoot();
}

//instaniations
new Citystore('Seattle', 23, 65, 6.3);
new Citystore('Tokyo', 3, 24, 1.2);
new Citystore('Dubai', 11, 38, 3.7);
new Citystore('Paris', 20, 38, 2.3);
new Citystore('Lima', 2, 16, 4.6);


function renderAll() {
  renderHeader();
  renderBody();
  for (let i = 0; i < cityStores.length; i++) {
    cityStores[i].renderTable();
  }
  renderFoot();
}

renderAll();
