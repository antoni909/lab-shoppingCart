'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
  // what makes this.items an arr???
  // this refers to the Cart Object
  // this.items 
};

// METHOD of CART/instance object: add new CartItem to Cart
// from line 22-26
  // trying to create an instance and add add it to this.items line 6 which is part of Cart constructor
Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items

  let newItem = new CartItem(product, quantity)
  this.items.push(newItem);
  // pushing that CartItem into the arr this.items
  // this refers to the Cart Object
  // this.items refers the arr in Cart object
};

// METHOD of CART/instances object: saveToLocalStorage
Cart.prototype.saveToLocalStorage = function() {
  // DONE: Fill in this instance method to save the contents of the cart to localStorage

  // this refers to the Cart Object
  // this.items refers to the arr that will hold the new object/instance of CartItem is added 
  // the key name in setItem is arbitrary
  let myCartItems = JSON.stringify(this.items);
  localStorage.setItem('cart-items', myCartItems);
};

// Cart.prototype.saveToLocalStorage = function() {
//   let getCartItems = JSON.parse(localStorage.getItem('cart-items'));
// }

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  localStorage.removeItem('item');
};

var CartItem = function(product, quantity) {
  this.product = product;
  // the item being sold
  this.quantity = quantity;
  // how many of those items will be sold
  // this refers to the new Object that will be instantiated 
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
  //this refers to individual objects, an instance of Product Constructor
};

Product.allProducts = [];
// allProducts is a property of Product Constructor
// at first it is an empty arr
// it stores all instances of Product

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
