use strict'

// GLobal variables

let totalClicks = 0;
let clicksAllowed = 15;
let allGoats = [];
let imageOne = document.querySelector('section img: first-child');
let imageTwo = document.querySelector('section img: nth-child(2)');
let myContainer = document.querySelector('section');
let divButton = document.querySelector('div');

console.log(imageOne);
console.log(imageTwo);
console.log(myContainer);
console.log(divButton);

function Products(name, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtensions}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();
new Products();


function getRandomindex() {
  return Math.floor(Math.random() * allGoats.length);
}

function renderedGoats() {
  let firstGoatIndex = getRandomIndex();
  let secondGoatIndex = getRandomIndex();
  // in lab today youll have 3 images so it wont work... Recommend using an index array. (maybe name it indexArray)
  // Check to see if the index is includedin that array.
  // if your using that array pop those results from the array or shift maybe?
  // pop and shift both return something.
  while (firstGoatIndex === secondGoatIndex) {
    secondGoatIndex = getRandomIndex();
  }

  imageOne.src = allGoats[firstGoatIndex].src;
  imageOne.title = allGoats[firstGoatIndex].name;
  allGoats[firstGoatIndex].views++;

  imageTwo.src = allGoats[secondGoatIndex].src;
  imageTwo.title = allGoats[secondGoatIndex].name;
  allGoats[secondGoatIndex].views++;
}

renderResults() {
  // rendering a list of clicks
  let myList = document.querySelector('ul');
  for (let i = 0; i < allGoats.length; i++) {
    let li = document.createElement('li');
    blank had 3 votes, and was seen 5 Times.
      li.textContent = `${allGoats[i].name} was viewed ${allGoats[i].views} times and clicked ${allGoats[i].clicked} times`;
    myList.appendChild(li);
  }
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Must click image');
    break;
  }
  totalClicks++;
  let getClicked = event.target.title;

  for (let i = 0; i < allGoats.length; i++) {
    if (getClicked === allGoats[i].name) {
      allGoats[i].clicks++
      console.log(allGoats[i]);
    }
    console.log(getClicked);
  }
  renderedGoats();
  if (totalClicks === clicksAllowed) {
    // remove evenet Listener.
    myContainer.removeEventListener('click', handleClick);
    renderResults();
  }
}

function buttonClick(event) {
  console.log('i was clicked');
  if (totalClicks === clicksAllowed) {
    renderResults();
  }
}
renderedGoats();

myContainer.addEventListener('click', handleClick);
myButton.addEventListener('click', 