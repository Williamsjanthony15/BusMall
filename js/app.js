'use strict';

let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let myContainer = document.querySelector('section');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let picArray = [imageOne, imageTwo, imageThree];
let uniqueArray = [];
let ctx = document.getElementById('productsChart').getContext('2d');

function Products(name, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtensions}`;
  this.views = 0;
  this.clicked = 0;
  allProducts.push(this);
}
new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('usb', 'gif');
new Products('water-can');
new Products('wine-glass');


function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function getUniqueIndex() {
  while (uniqueArray.length < 6) {
    var any = getRandomIndex();
    while (!uniqueArray.includes(any)) {
      uniqueArray.push(any);
    }
  }
}

function renderProducts() {
  getUniqueIndex();
  for (var i = 0; i < picArray.length; i++) {
    var insert = uniqueArray.shift();
    picArray[i].src = allProducts[insert].src;
    picArray[i].title = allProducts[insert].name;
    allProducts[insert].views++;
  }
}


function handleClick(event) {
  if (event.target === myContainer) {
    alert('Must click image');
  }
  totalClicks++;
  let getClicked = event.target.title;
  for (let i = 0; i < allProducts.length; i++) {
    if (getClicked === allProducts[i].name) {
      allProducts[i].clicked++;
    }
  }
  renderProducts();
  if (totalClicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

renderProducts();

function renderChart() {
  let productClicks = [];
  let productNames = [];
  let productViews = [];

  for (let i = 0; i < allProducts.length; i++) {
    productClicks.push(allProducts[i].clicked);
    productNames.push(allProducts[i].name);
    productViews.push(allProducts[i].views);
    console.log(productNames);
  }

  let productsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Clicks',
        data: productClicks,
        backgroundColor: 'rgba(107, 159, 255, 1)',
        borderColor: 'rgba(5, 93, 255, 1)',
        borderWidth: 5
      },

      {
        label: 'Views',
        data: productViews,
        backgroundColor: 'rgba(37, 223, 17, 0.57)',
        borderColor: 'rgba(47, 165, 34, 1)',
        borderWidth: 5
      }]
    },
    responsive: false,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

myContainer.addEventListener('click', handleClick);

