'use strict';

//constructor funtions are object "factories"
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const cityStores = [];

//global varibles
const storeTable = document.getElementById('table');
const myForm = document.getElementById('form');
let tbodyElement = document.createElement('tbody');
let tfootElement = document.createElement('tfoot');

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
  renderElement('th', this.name, trElement);

  //iterate through hourly totals and append to DOM
  for (let i = 0; i < hours.length; i++) {
    renderElement('td', this.calculateHourlySales(), trElement);
  }

  //creating the daily totals column
  renderElement('td', this.dailyTotal, trElement);
};

function renderElement(el, content, parentEl) {
  let childEl = document.createElement(el);
  childEl.textContent = content;
  parentEl.appendChild(childEl);
}

function renderHeader() {
  //creating the table head to sit inside table
  let theadElement = document.createElement('thead');
  storeTable.appendChild(theadElement);

  //creating the table row to sit inside table head
  let trElement = document.createElement('tr');
  theadElement.appendChild(trElement);

  //creating the first th element to go inside table row
  renderElement('th', '', trElement);

  //for loop to iterate through the hours array
  for (let i = 0; i < hours.length; i++) {
    renderElement('th', hours[i], trElement);
  }

  // adding daily totals onto the end of the table
  renderElement('th', 'Daily Total', trElement);
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

  renderElement('th', 'Hourly Totals', trElement);


  let totalofTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let allHourlyTotals = 0;

    for (let j = 0; j < cityStores.length; j++) {
      allHourlyTotals += cityStores[j].hourlySales[i];
    }

    totalofTotals += allHourlyTotals;

    //rendering the last box of totals.
    renderElement('td', allHourlyTotals, trElement);
  }

  renderElement('td', totalofTotals, trElement);
}

//creating an event handler to input data to the table
function handleSubmit(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const min = parseInt(event.target.min.value);
  const max = parseInt(event.target.max.value);
  const avg = parseInt(event.target.avg.value);

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
// event listeners
myForm.addEventListener('submit', handleSubmit);
