'use strict';

const listSeattle = document.getElementById('seattle');
const listTokyo = document.getElementById('tokyo');
const listDubai = document.getElementById('dubai');
const listParis = document.getElementById('paris');
const listLima = document.getElementById('lima');

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

/* function randomNumber(min, max) {

  return Math.floor(Math.random() * (max - min + 1) + min);

}

const myNumber = randomNumber(3, 5);
console.log(myNumber); */

//create one for loop that processes the random numbers needed
/* function calculator(arr) {
  for (let i = 0; i < arr.length; i++)
}; */

//first object literal

let seattleStore = {
  name: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calculateHourlySales() {
    console.log(`This is  the random number ${this.getRandomNumber()}`);
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales[i] = Math.trunc(this.getRandomNumber() * this.avgCookieSale);
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function () {
    //this.calculateHourlySales();
    console.log(`This is the hourly cookie sales ${this.calculateHourlySales()}`);
    console.log(`Hourly sales array${this.hourlySales}`);
    for (let i = 0; i < hours.length; i++) {
      //create the element
      const liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]} : ${this.hourlySales[i]}`;
      //append the DOM
      listSeattle.appendChild(liElement);
    }
    const liTotalElement = document.createElement('li');
    liTotalElement.textContent = `Daily Total : $${this.dailyTotal}`;
    //append the DOM
    listSeattle.appendChild(liTotalElement);
  }
};

let tokyoStore = {
  name: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calculateHourlySales() {
    console.log(`This is  the random number ${this.getRandomNumber()}`);
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales[i] = Math.trunc(this.getRandomNumber() * this.avgCookieSale);
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function () {
    //this.calculateHourlySales();
    console.log(`This is the hourly cookie sales ${this.calculateHourlySales()}`);
    console.log(`Hourly sales array${this.hourlySales}`);
    for (let i = 0; i < hours.length; i++) {
      //create the element
      const liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]} : ${this.hourlySales[i]}`;
      //append the DOM
      listTokyo.appendChild(liElement);
    }
    const liTotalElement = document.createElement('li');
    liTotalElement.textContent = `Daily Total : $${this.dailyTotal}`;
    //append the DOM
    listTokyo.appendChild(liTotalElement);
  }
};

let dubaiStore = {
  name: 'dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calculateHourlySales() {
    console.log(`This is  the random number ${this.getRandomNumber()}`);
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales[i] = Math.trunc(this.getRandomNumber() * this.avgCookieSale);
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function () {
    //this.calculateHourlySales();
    console.log(`This is the hourly cookie sales ${this.calculateHourlySales()}`);
    console.log(`Hourly sales array${this.hourlySales}`);
    for (let i = 0; i < hours.length; i++) {
      //create the element
      const liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]} : ${this.hourlySales[i]}`;
      //append the DOM
      listDubai.appendChild(liElement);
    }
    const liTotalElement = document.createElement('li');
    liTotalElement.textContent = `Daily Total : $${this.dailyTotal}`;
    //append the DOM
    listDubai.appendChild(liTotalElement);
  }
};

let parisStore = {
  name: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calculateHourlySales() {
    console.log(`This is  the random number ${this.getRandomNumber()}`);
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales[i] = Math.trunc(this.getRandomNumber() * this.avgCookieSale);
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function () {
    //this.calculateHourlySales();
    console.log(`This is the hourly cookie sales ${this.calculateHourlySales()}`);
    console.log(`Hourly sales array${this.hourlySales}`);
    for (let i = 0; i < hours.length; i++) {
      //create the element
      const liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]} : ${this.hourlySales[i]}`;
      //append the DOM
      listParis.appendChild(liElement);
    }
    const liTotalElement = document.createElement('li');
    liTotalElement.textContent = `Daily Total : $${this.dailyTotal}`;
    //append the DOM
    listParis.appendChild(liTotalElement);
  }
};

let limaStore = {
  name: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hourlySales: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calculateHourlySales() {
    console.log(`This is  the random number ${this.getRandomNumber()}`);
    for (let i = 0; i < hours.length; i++) {
      this.hourlySales[i] = Math.trunc(this.getRandomNumber() * this.avgCookieSale);
      this.dailyTotal += this.hourlySales[i];
    }
  },
  render: function () {
    //this.calculateHourlySales();
    console.log(`This is the hourly cookie sales ${this.calculateHourlySales()}`);
    console.log(`Hourly sales array${this.hourlySales}`);
    for (let i = 0; i < hours.length; i++) {
      //create the element
      const liElement = document.createElement('li');
      //give it content
      liElement.textContent = `${hours[i]} : ${this.hourlySales[i]}`;
      //append the DOM
      listLima.appendChild(liElement);
    }
    const liTotalElement = document.createElement('li');
    liTotalElement.textContent = `Daily Total : $${this.dailyTotal}`;
    //append the DOM
    listLima.appendChild(liTotalElement);
  }
};



seattleStore.render();
tokyoStore.render();
dubaiStore.render();
parisStore.render();
limaStore.render();

