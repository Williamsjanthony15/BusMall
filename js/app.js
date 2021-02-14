'use strict';

// GLobal variables

let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');
let divButton = document.querySelector('div');

// console.log(imageOne);
// console.log(imageTwo);
// console.log(myContainer);
// console.log(divButton);

function Products(name, fileExtensions = 'jpg') {
  this.name = name;
  // this.fileExtensions = fileExtensions
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
  while(firstProductIndex === thirdProductIndex) {
    firstProductIndex = getRandomIndex();
  }
  while(secondProductIndex === thirdProductIndex ||secondProductIndex === firstProductIndex) {
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
  // rendering a list of clicks
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
      console.log(allProducts[i]);
    }
    console.log(getClicked);
  }
  renderProduct();
  if (totalClicks === clicksAllowed) {
    // remove evenet Listener.
    myContainer.removeEventListener('click', handleClick);
  }
}

function buttonClick(event) { //disable-eslint-line
  console.log('i was clicked');
  if (totalClicks === clicksAllowed) {
    renderResults();
  }
}
renderProduct();

myContainer.addEventListener('click', handleClick);
divButton.addEventListener('click', buttonClick);
