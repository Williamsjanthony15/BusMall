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

function renderProduct() {

  while (uniqueArray.length < 6) {
    var any = getRandomIndex();
    while (!uniqueArray.includes(any)) {
      console.log('Im Inside');
      picArray.push(any);
    }
  }
  console.log('outside complete');
}
// Outer while loop will run until the length of the unique array is 6
// unique array global
// inner while will have .includes, checking to see if random number(index) is the different from numbers that are in it already.
// If it is different .push to unique array... 

//   let firstProductIndex = getRandomIndex();
//   let secondProductIndex = getRandomIndex();
//   let thirdProductIndex = getRandomIndex();

//   while (firstProductIndex === secondProductIndex) {
//     firstProductIndex = getRandomIndex();
//   }
//   while (firstProductIndex === thirdProductIndex) {
//     firstProductIndex = getRandomIndex();
//   }
//   while (secondProductIndex === thirdProductIndex || secondProductIndex === firstProductIndex) {
//     secondProductIndex = getRandomIndex();
//   }

//   imageOne.src = allProducts[firstProductIndex].src;
//   imageOne.title = allProducts[firstProductIndex].name;
//   allProducts[firstProductIndex].views++;

//   imageTwo.src = allProducts[secondProductIndex].src;
//   imageTwo.title = allProducts[secondProductIndex].name;
//   allProducts[secondProductIndex].views++;

//   imageThree.src = allProducts[thirdProductIndex].src;
//   imageThree.title = allProducts[thirdProductIndex].name;
//   allProducts[thirdProductIndex].views++;
// }

function renderResults() {
  renderProduct();
  for (var i = 0; i < picArray.length; i++) {
    var insert = uniqueArray.unshift();
    allProducts[i].src = allProducts[insert].src;
    allProducts[i].title = allProducts[insert].name;
    allProducts[i].views++;
  }
}

// {
//   let myList = document.querySelector('ul');
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} had ${allProducts[i].views} votes, and was seen ${allProducts[i].clicked} times`;
//     myList.appendChild(li);
//   }
// }

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
  renderProduct();
  if (totalClicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
}

function buttonClick(event) {
  if (totalClicks === clicksAllowed) {
    renderResults();
  }
}

renderProduct();

function renderChart() {
  let productClicks = [];
  let productNames = [];
  let productViews = [];
  for (let i = 0; i < allProducts.length; i++) {
    productClicks.push(allProducts[i].clicks);
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
      // {
      //   label: 'Names',
      //   data: productNames,
      //   backgroundColor: 'rgba(255, 66, 66, 0.54)',      ------ Code Review Question. What is this utilized use for? Where do they live when rendered?
      //   borderColor: 'rgba(255, 20, 20, 1)',
      //   borderWidth: 5
      // },
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
divButton.addEventListener('click', buttonClick);
