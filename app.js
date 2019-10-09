/* eslint-disable no-undef */

var parentEL = document.getElementById('parentElement');

var allShops = [];
function Stores(shopHours, minCust, maxCust, avgCookie, hourTotals, locationName, totalcookies) {
  this.shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourTotals = [hour()*avgCookie];
  this.locationName = locationName;
  this.totalcookies = [];

}

function hour (minCust, maxCust) {
  min = Math.ceil(minCust);
  max = Math.floor(maxCust);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Stores.prototype.locName = function () {
//   var locationName = this.locationName;
//   document.createElement('h1');
//   locationName.textContent = locationName;
//   parentEL.appendChild(this.childEl);
// };

function store() {
  hourTotals = [];
  for (var i = 0; i < hour.length; i++) {
    this.childEl = document.createElement('li');
    this.hour[i];
    hourTotals[i] = hour(this.minCust, this.maxCust);
    var cookiePerHour = Math.ceil(this.hourTotals[i] * this.avgCookie);
    hourTotals.push(cookiePerHour);
    parentEL.appendChild(this.childEl);

  }
  function shopLength (){
    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++){
      sum + this.shopHours[i];
    }
  }
}


var seattle = new Stores(this.shopHours, 23, 65, 6.5, store(), 'Seattle', this.totalcookies);
var tokyo = new Stores(this.shopHours, 3, 24, 1.2, this.hourTotals, 'Tokyo', this.totalcookies);
var dubai = new Stores(this.shophours, 11, 38, 3.7, this.hourTotals, 'Dubai', this.totalcookies);
var paris = new Stores(this.shophours, 20, 38, 2.3, this.hourTotals, 'Paris', this.totalcookies);
var lima = new Stores(this.shopHours, 2, 16, 4.6, this.hourTotals, 'Lima', this.totalcookies);
allShops.push(this);
console.log(seattle,tokyo,dubai,paris,lima);
var childEl = document.createElement('li');




//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.5,
//   hourTotals: [],
//   locationName: 'Seattle',
//   totalcookies: 0,


// childEl.textContent = 'quack';










// var Shop2 = {
//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   hourTotals: [],
//   locationName: 'Tokyo',

//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.shopHours[i];
//       this.hourTotals[i] = hour(3, 24);
//       var cookiePerHour = Math.ceil(this.hourTotals[i] * this.avgCookie);
//       this.hourTotals.push(cookiePerHour);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Customers: ${this.hourTotals[i]}`;
//       parentEL.appendChild(childEl);

//     }
//     var locName = document.createElement('h1');
//     locName.textContent = `${this.locationName}`;
//     parentEL.appendChild(locName);


//     var sum = 0;
//     for (i = 0; i < this.shopHours.length; i++) {
//       sum + this.shopHours[i];
//     }
//   }
// };

// var Shop3 = {
//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   hourTotals: [],
//   locationName: 'Dubai',

//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.shopHours[i];
//       this.hourTotals[i] = hour(11, 38);
//       var cookiePerHour = Math.ceil(this.hourTotals[i] * this.avgCookie);
//       this.hourTotals.push(cookiePerHour);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Customers: ${this.hourTotals[i]}`;
//       parentEL.appendChild(childEl);

//     }
//     var locName = document.createElement('h1');
//     locName.textContent = `${this.locationName}`;
//     parentEL.appendChild(locName);


//     var sum = 0;
//     for (i = 0; i < this.shopHours.length; i++) {
//       sum + this.shopHours[i];
//     }
//   }
// };

// var Shop4 = {
//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   hourTotals: [],
//   locationName: 'Paris',

//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.shopHours[i];
//       this.hourTotals[i] = hour(20, 38);
//       var cookiePerHour = Math.ceil(this.hourTotals[i] * this.avgCookie);
//       this.hourTotals.push(cookiePerHour);
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Cookies: ${this.hourTotals[i]}`;
//       parentEL.appendChild(childEl);

//     }
//     var locName = document.createElement('h1');
//     locName.textContent = `${this.locationName}`;
//     parentEL.appendChild(locName);


//     var sum = 0;
//     for (i = 0; i < this.shopHours.length; i++) {
//       sum + this.shopHours[i];
//     }
//   }
// };
// var Shop5 = {
//   shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   hourTotals: [],
//   locationName: 'Lima',

//   render: function () {
//     for (var i = 0; i < this.shopHours.length; i++) {
//       var childEl = document.createElement('li');
//       this.shopHours[i];
//       this.hourTotals[i] = hour(2, 57);
//       var cookiePerHour = Math.ceil(this.hourTotals[i] * this.avgCookie);
//       this.hourTotals.push(cookiePerHour);
//       childEl.textContent = `${this.locationName}`;
//       childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Cookies: ${this.hourTotals[i]}`;
//       parentEL.appendChild(childEl);

//     }

//     var sum = 0;
//     for (i = 0; i < this.shopHours.length; i++) {
//       sum + this.shopHours[i];
//     }
//   }
// };
// // Shop1.hour();
// // Shop1.render();
// Shop2.render();
// Shop3.render();
// Shop4.render();
// Shop5.render();
