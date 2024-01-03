// ! Global Variables
let apiURL = 'https://fakestoreapi.com/products/'
let cart = [];
let display = document.getElementById('display');

// ! DOM Elements - creating variables
const category = document.querySelectorAll('button')
//console.log(category);
const electronics = document.getElementById('electronics');
const mensClothing = document.getElementById('mensClothing');
const womensClothing = document.getElementById('womensClothing');
const jewelry = document.getElementById('jewelry');
// ! const keptCards = document.getElementByID('kept-cards')



// ! Functions
const fakeStore = async(endpoint) => {
    const response = await fetch(apiURL + endpoint );
    const data = await response.json();
    console.log(data);
    console.log(display.children.length);

    while (display.children.length > 0) {
        display.children[0].remove();
    }
    displayCards(data);
    } 


const displayCards = data => {
    console.log(data);
    data.forEach(item => {
        
// * Create Elements of card
let card = document.createElement('div');
let categoryButton = document.createElement('h3');

let id = document.createElement('h5');
let image = document.createElement('img');
let body = document.createElement('div');

let title = document.createElement('h1');
let btn = document.createElement('button');




//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
image.src = item.image;
image.className = 'card-img-top';
title.className = 'card-title';
title.textContent = item.title;
btn.className = 'btn btn-primary';
btn.textContent = 'Add to Cart'
btn.className = 'btn btn-outline-success me-2';
btn.onclick = () => {
    var product = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1
    }
    console.log(product);
    cart.push(product);
    displayCart(); // call the function by using var name
}


// * Append Elements -- appending all elements to each other -- go from bottom to top - add bottom to second to bottom, etc.


// TODO: Create Accordion

// Create elements
let accordion = document.getElementById('accordionFlushExample');
let desc = document.createElement('p');
let price = document.createElement('p');
desc.textContent = item.desc;
price.textContent = item.price;


// set attributes
desc.className = item.desc;
desc.textContent = item.desc;
price.className = 'card-price';
price.textContent = item.price;

// append
card.appendChild(image);
card.appendChild(title);
card.appendChild(btn);
card.appendChild(desc);
card.appendChild(price);

display.appendChild(card);
});
}


// TODO: Display Cart
const displayCart = () => {
    // use parameter to add to cart array
console.log('Items in Cart: ', cart);
cart.forEach(item => {

    // * Create Elements of modal
let price = document.createElement('p');
let title = document.createElement('h1');
let body = document.createElement('div');
// document.getElementById('subtotalValue').textContent = "subtotal value goes here";
let tableRow = document.createElement('tr');
let itemName = document.createElement('td');
let itemQuant = document.createElement('td');
let itemPrice = document.createElement('td');
let tbody = document.getElementById('tbody');
itemPrice.textContent = item.price;
itemName.textContent = item.title;
itemQuant.textContent = 1;

//! let desc = document.createElement('div')

//  * Set attributes -- describing all parts in html


// * Append Elements -- appending all elements to each other
tableRow.appendChild(itemQuant);
tableRow.appendChild(itemName);
tableRow.appendChild(itemPrice);
tbody.appendChild(tableRow);
})}



// TODO: addToCart
// ! add an event listener that calls function to display cart
const addToCart = () => {
console.log('Items in Cart: ', cart);
cart.map(item => {

    // * Create Elements of card
let div = document.createElement('div');
let card = document.createElement('div');
let image = document.createElement('img');
let price = document.createElement('p');
let title = document.createElement('h1');


//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
image.src = item.image;
image.className = 'card-img-top';
title.className = 'card-title';
title.textContent = item.title;
price.className = 'card-price';
price.textContent = item.price;

// * Append Elements -- appending all elements to each other -- go from bottom to top - add bottom to second to bottom, etc.
card.appendChild(div);
card.appendChild(image);
card.appendChild(price); // left = parent -- right = child
card.appendChild(title);

});

// for each item, add all values to the modal, and add up price of all cart items combined
}

// ! Event Listeners

// TODO: onclick anonymous function generates new object 

electronics.addEventListener('click', e => {
    fakeStore('category/electronics?sort=asc')

})

womensClothing.addEventListener('click', e => {
    fakeStore(`category/women's%20clothing?sort=asc`)

})
mensClothing.addEventListener('click', e => {
    fakeStore(`category/men's%20clothing?sort=asc`)

})
jewelry.addEventListener('click', e => {
    fakeStore('category/jewelery?sort=asc')

})

window.onload = e => {
    fakeStore("");
}
