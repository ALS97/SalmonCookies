
var parentEL = document.getElementById('parentElement');

function hour(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)) + min;
}

var Shop1 = {
  shopHours:['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  minCust: 10,
  maxCust: 60,
  avgCookie: 13,
  hourTotals:[],
  locationName: 'Seattle',

  render: function(){
    for(var i=0;i<this.shopHours.length; i++){
      var childEl = document.createElement('li');
      this.shopHours[i];
      this.hourTotals[i] = hour(10, 60);
      // childEl.textContent = 'quack';
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEL.appendChild(childEl);
    // this.hourTotals[i]= hour();
    }
  }
};

Shop1.render();
