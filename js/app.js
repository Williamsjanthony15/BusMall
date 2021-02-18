'use strict';

// GLobal variables

let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let myContainer = document.querySelector('section');
let divButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');

// console.log(imageOne);
// console.log(imageTwo);
// console.log(myContainer);
// console.log(divButton);

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

function renderProduct() {
  let firstProductIndex = getRandomIndex();
  let secondProductIndex = getRandomIndex();
  let thirdProductIndex = getRandomIndex();

  while (firstProductIndex === secondProductIndex) {
    firstProductIndex = getRandomIndex();
  }
  while (firstProductIndex === thirdProductIndex) {
    firstProductIndex = getRandomIndex();
  }
  while (secondProductIndex === thirdProductIndex || secondProductIndex === firstProductIndex) {
    secondProductIndex = getRandomIndex();
  }

  imageOne.src = allProducts[firstProductIndex].src;
  imageOne.title = allProducts[firstProductIndex].name;
  allProducts[firstProductIndex].views++;

  imageTwo.src = allProducts[secondProductIndex].src;
  imageTwo.title = allProducts[secondProductIndex].name;
  allProducts[secondProductIndex].views++;

  imageThree.src = allProducts[thirdProductIndex].src;
  imageThree.title = allProducts[thirdProductIndex].name;
  allProducts[thirdProductIndex].views++;
}

function renderResults() {
  let myList = document.querySelector('ul');
  for (let i = 0; i < allProducts.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${allProducts[i].name} had ${allProducts[i].views} votes, and was seen ${allProducts[i].clicked} times`;
    myList.appendChild(li);
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
      // console.log(allProducts[i]);
    }
    // console.log(getClicked);
  }
  renderProduct();
  if (totalClicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
  }
}

function buttonClick(event) {
  // console.log('i was clicked');
  if (totalClicks === clicksAllowed) {
    renderResults();
    // Call makeChart function
  }
}

//building chart functionality. Function make chart** 
// seperate function that will grab views, clicked, and names store them in seperate arrays. 
renderProduct();

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, 
  
Function renderChart() {
  let productNames = [];
  let productClicks = [];
  let productViews = [];
  for ( let i = 0; i < allProducts; i++) {
    productNames.push(productNames[i].names);
    productClicks.push(productClicks[i].clicks);
    productViews.push(productViews[i].views);
  }
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
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
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
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
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
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
myContainer.addEventListener('click', handleClick);
divButton.addEventListener('click', buttonClick);




// in function (make chart)
// * push allproducts[i].name     -
// push allproducts[i].clicked    All arrays. 
// push allproducts[i].views      -

// for loop, loop over allProducts. 
// Do all of this first.
