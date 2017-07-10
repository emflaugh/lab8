var groceryList = [{
    groceryItem: "Apple",
    price: 1.50,
    quantity: 10
},
{
    groceryItem: "Milk",
    price: 3.99,
    quantity: 1
},
{
    groceryItem: "Cheese",
    price: 6.99,
    quantity: 2
},
{
    groceryItem: "Bread",
    price: 4.99,
    quantity: 1
},
{
    groceryItem: "Chicken",
    price: 8.99,
    quantity: 2
}];

//function to add oject to the array
function addToList (itemName, itemPrice, quantityCount) {
  var newObject = {groceryItem: itemName, price: itemPrice, quantity: quantityCount};
  groceryList.push(newObject);
}
//call the function
addToList('Turkey', 12.99, 2);

//function to remove an item from the array
function removeFromList(x) {
  groceryList.splice(x, 1);
}
//call the function
removeFromList(0)


//put this in a function, ....in the add items function call THIS function again to get the new total.

// var total = 0;
// var tax = 0;
// var grandTotal = 0;

function calculateTotal(){
  var total = 0;
  var tax = 0;
  var grandTotal = 0;
  groceryList.forEach(function(items){
    items.quantity = 1;
      console.log(items.quantity + " of the item " + items.groceryItem + " costs $" + (items.quantity * items.price));
      total += (items.price * items.quantity);
      tax += (items.price * items.quantity) * 0.06;
      grandTotal += (items.price * items.quantity) + ((items.price * items.quantity) * 0.06);
  });

  console.log("Total: $" + total);
  console.log("Tax: $" + tax.toFixed(2));
  console.log("Grand Total: $" + grandTotal.toFixed(2));

var gTotal = document.createElement('p');
var gText = document.createTextNode('Your total is : $' + grandTotal.toFixed(2));
gTotal.appendChild(gText);
document.getElementById('total').appendChild(gTotal);
}


// declaring the container variable
var container = document.getElementById('container');

// appending Grocery List array to ordered list
var groceryItems = document.getElementById('gList');
for (var i=0; i < groceryList.length; i++) {
  var listItem = document.createElement('li');
  listItem.innerText = groceryList[i].groceryItem + ' costs $' + groceryList[i].price;
  groceryItems.appendChild(listItem);
}

function addItems() {
var newItem = document.getElementById('addItem');
var newPrice = document.getElementById('addPrice');
var groceryItems = document.getElementById('gList');
groceryList.push({groceryItem: newItem.value, price: newPrice.value});
var listItem = document.createElement('li');
listItem.innerText = newItem.value + ' costs $' + newPrice.value;
groceryItems.appendChild(listItem);
calculateTotal()
}
