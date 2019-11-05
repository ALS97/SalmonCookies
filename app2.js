'use strict';

var tableBody = document.getElementById('tableElement');
CookieShop.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// array to store all new instantiations on CookieShop constructor
CookieShop.allStores = [];
CookieShop.tableDataEl = document.getElementById('tableData');
CookieShop.allStoresTotal = 0;


function CookieShop(minCustomer, maxCustomer, avgCookie, locName){
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.locName = locName;
  this.hourlyCookiesTotal =[];
  this.dailyCookies = 0;
  CookieShop.allStores.push(this);
  this.generateHourlyCookie();
  this.renderShopRow();


}



var randomCustomer = function(min, max){
  return Math.random() * ((max - min)+1) + min;

};

CookieShop.prototype.generateHourlyCookie = function(){
  for(var i = 0; i < CookieShop.hours.length; i++){
    var cookie = Math.ceil(this.avgCookie * randomCustomer(this.minCustomer, this.maxCustomer));
    this.hourlyCookiesTotal.push(cookie);
    this.dailyCookies += cookie;
    CookieShop.allstores += cookie;
  }

};


function renderHeaderRow() {

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location ';
  trEl.appendChild(thEl);

  for(var i=0; i< CookieShop.hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = CookieShop.hours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);

}
renderHeaderRow();

CookieShop.prototype.renderShopRow = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.locName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < this.hourlyCookiesTotal.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookiesTotal[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = this.dailyCookies;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};



function renderFooterRow(){
  var trEl = document.createElement('tr');
  trEl.setAttribute('id', 'footerrow');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Totals:';
  trEl.appendChild(tdEl);

  for(var i = 0; i < CookieShop.hours.length; i++){
    var storeHourlyTotal = 0;
    var td = document.createElement('td');

    for(var j = 0; j < CookieShop.allStores.length; j++){
      storeHourlyTotal += CookieShop.allStores[j].hourlyCookiesTotal[i];
      for(var k= 0; k < CookieShop.allStores.length; k++){
        var dailyTotal = 0;

      }
    }

    td.textContent = storeHourlyTotal;
    trEl.appendChild(td);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = CookieShop.allStoresTotal;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);

}
var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);








new CookieShop(23, 65, 6.5, 'Seattle');
new CookieShop(3, 24, 1.2, 'Tokyo');
new CookieShop(11, 38, 3.7, 'Dubai');
new CookieShop(20, 38, 2.3, 'Paris');
new CookieShop(2, 16, 4.6, 'Lima');


renderFooterRow();
function handleSubmit(event) {

  event.preventDefault();
  var mincustomer = event.target.MinCust.value;
  var maxcustomer = event.target.MaxCust.value;
  var avgcookie = event.target.AvgCookie.value;
  var location = event.target.Location.value;
  document.getElementById('MinCust').value=null;
  document.getElementById('MaxCust').value=null;
  document.getElementById('AvgCookie').value=null;
  document.getElementById('Location').value=null;
  new CookieShop(mincustomer, maxcustomer, avgcookie, location);
  document.getElementById('footerrow').remove();
  renderFooterRow();


}










