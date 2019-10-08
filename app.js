
var parentEL = document.getElementById('parentElement');

function hour(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var Shop1 = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCust: 10,
  maxCust: 60,
  avgCookie: 13,
  hourTotals: [],
  locationName: 'Seattle',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(10, 60);
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
  minCust: 8,
  maxCust: 53,
  avgCookie: 8,
  hourTotals: [],
  locationName: 'Port Orchard',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(8, 53);
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
  minCust: 12,
  maxCust: 39,
  avgCookie: 3,
  hourTotals: [],
  locationName: 'Tukwilla',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(12, 39);
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
  minCust: 5,
  maxCust: 37,
  avgCookie: 5,
  hourTotals: [],
  locationName: 'Tacoma',

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(5, 37);
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
