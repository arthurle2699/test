"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Tien Le
   Date:   11/2/2020

   Filename: sub_cart.js

   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart); //step 3

function setupCart() { //step 4
    var addButtons = document.getElementsByClassName("addButton");
    for (var i = 0; i < addButtons.length; i++) {
        addButtons[i].onclick = addItem;
    }
}

function addItem(e) { //step 5
    var foodItem = e.target.nextElementSibling;
    var foodID = foodItem.id;
    var foodDescription = foodItem.cloneNode(true);
    var cartBox = document.getElementById("cart");
    var duplicateOrder = false;
    for (var n = cartBox.firstElementChild; n = n.nextElementSibling; n !== null) {
        if (n.id == foodID) {
            duplicateOrder = true;
            n.firstElementChild.textContent++;
            break;
        }
    }
    if (duplicateOrder == false) {
        var orderCount = document.createElement("span");
        orderCount.textContent = "1";
        foodDescription.insertBefore(orderCount, foodDescription.firstChild);
        cartBox.appendChild(foodDescription);
    }

}