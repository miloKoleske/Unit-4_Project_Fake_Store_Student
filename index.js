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
    data.forEach(element => {
        
// * Create Elements of card
let card = document.createElement('div');
let categoryButton = document.createElement('h3');
let description = document.createElement('p');
let id = document.createElement('h5');
let image = document.createElement('img');
let body = document.createElement('div');
let price = document.createElement('p');
let title = document.createElement('h1');
let btn = document.createElement('button');

//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
image.src = element.image;
image.className = 'card-img-top';
title.className = 'card-title';
title.textContent = element.title;
description.className = 'card-text';
description.textContent = element.description;
price.className = 'card-price';
price.textContent = element.price;
btn.className = 'btn btn-primary';
btn.textContent = 'Add to Cart'
btn.className = 'btn btn-outline-success me-2';
btn.onclick = () => {
    let element = {
        id: element.id,
        title: element.title,
        cost: element.cost,
        quantity: 1
    }
    cart.push(element);
    submitToCart();
}
//console.log(cart);


// * Append Elements -- appending all elements to each other -- go from bottom to top - add bottom to second to bottom, etc.
card.appendChild(image);
card.appendChild(title);
card.appendChild(description);
card.appendChild(price);
card.appendChild(btn);
display.appendChild(card);
});
}
// TODO: Create Accordion



// TODO: Display Cart
const displayCart = () => {
    // use parameter to add to cart array
console.log('Items in Cart: ', cart);
cart.map(element => {

    // * Create Elements of card
let card = document.createElement('div');
let image = document.createElement('image');
let price = document.createElement('p');
let title = document.createElement('h1');
let body = document.createElement('div');

//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
image.src = element.image;
image.className = 'card-img-top';
title.className = 'card-title';
title.textContent = element.title;
cardPrice.className = 'card-price';
cardPrice.textContent = element.price;

// * Append Elements -- appending all elements to each other -- go from bottom to top - add bottom to second to bottom, etc.
p.appendChild(p);
body.appendChild(p);
body.appendChild(h1);
card.appendChild(body);
card.appendChild(image);
d.appendChild(card);
keptCards.appendChild(div);
})}

// TODO: Create Accordion


// TODO: Display Cart
const submitToCart = () => {
console.log('Items in Cart: ', cart);
cart.map(element => {

    // * Create Elements of card
let card = document.createElement('div');
let image = document.createElement('image');
let price = document.createElement('p');
let title = document.createElement('h1');
let body = document.createElement('div');

//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
image.src = element.image;
image.className = 'card-img-top';
title.className = 'card-title';
title.textContent = element.title;
cardPrice.className = 'card-price';
cardPrice.textContent = element.price;

// * Append Elements -- appending all elements to each other -- go from bottom to top - add bottom to second to bottom, etc.
p.appendChild(p);
body.appendChild(p);
body.appendChild(h1);
card.appendChild(body);
card.appendChild(image);
div.appendChild(card);
keptCards.appendChild(div);
})
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
