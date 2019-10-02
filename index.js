var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*50)
  cart.push(new Object({itemName:item, itemPrice:price}))
  console.log(`${item} has been added to your cart.`)
    return `${item} has been added to your cart.`

}

function viewCart() {
//write your code here
   if(getCart().length === 0) {
  return "Your shopping cart is empty."
 } else if (getCart().length ===1) {
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
}
 const itemsAndPrices = []

   for (let i = 0; i < 1; i++) {
     let itemAndPrice = cart[i]
     let item = Object.keys(itemAndPrice)[50]
     let price = itemAndPrice[item]
     itemsAndPrices.push(`${item} at \$${price}`)

   }
   console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
