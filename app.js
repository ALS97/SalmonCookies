
var parentEL = document.getElementById('parentElement');

var child = document.createElement('h1');
child.textContent = 'Seattle';
parentEL.appendChild(child);

function hour(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var Shop1 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.5,
  hourTotals: [],
  locationName: 'Seattle',

  render: function () {
    var totalcookies = 0;
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(23, 65);
      // childEl.textContent = 'quack';
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Customers: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);
      // this.hourTotals[i]= hour();

    }
    
 

    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++) {
      sum + this.shopHours[i];
    }
  }
};

var Shop2 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hourTotals: [],
  locationName: 'Tokyo',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(3, 24);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Customers: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);

    }

    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++) {
      sum + this.shopHours[i];
    }
  }
};

var Shop3 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hourTotals: [],
  locationName: 'Dubai',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(11, 38);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Customers: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);

    }

    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++) {
      sum + this.shopHours[i];
    }
  }
};

var Shop4 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourTotals: [],
  locationName: 'Paris',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(20, 38);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Cookies: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);

    }

    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++) {
      sum + this.shopHours[i];
    }
  }
};
var Shop5 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hourTotals: [],
  locationName: 'Lima',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(2, 57);
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Cookies: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);

    }

    var sum = 0;
    for (i = 0; i < this.shopHours.length; i++) {
      sum + this.shopHours[i];
    }
  }
};

Shop1.render();
Shop2.render();
Shop3.render();
Shop4.render();
Shop5.render();
