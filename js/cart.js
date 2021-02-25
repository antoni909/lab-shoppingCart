/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  // cartItems is the (rm string)parsed JSON from what is present in localStorage
  cart = new Cart(cartItems);
  // the var cart creates new instance of Cart Object and has the object of the item saved to local storage
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it

function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.querySelector('tbody').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

function showCart() {

  // DONE: Find the table body
  let tbody = document.querySelector('tbody');
  // TODO: Create a TR
  
  // let items = localStorage.getItem(localStorage.key(i))
  // TODO: Iterate over the items in the cart
  
  for(let i = 0; i < cart.items.length; i++ ){
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tr = document.createElement('tr');
    
    let tdRemoveLink = document.createElement('td')
    let tdQuantity = document.createElement('td');
    let tdItem = document.createElement('td');
    
    tdRemoveLink.textContent = 'X'; 
    tdRemoveLink.setAttribute('class', 'removable-item');
    tdRemoveLink.id = i;
    tdQuantity.textContent = cart.items[i].quantity;
    tdItem.textContent = cart.items[i].product;
    
    tr.appendChild(tdRemoveLink);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdItem);
    
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(tr);
  }
  

}

function removeItemFromCart(event) {
  
  if(event.target.classList.contains('removable-item')) {
    console.log('i live');
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(+event.target.id);
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
  }
};

// This will initialize the page and draw the cart on screen
renderCart();
