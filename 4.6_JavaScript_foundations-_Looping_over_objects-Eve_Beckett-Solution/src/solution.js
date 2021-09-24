/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let cartTotal = 0;
  for (let item in cart) {
    let currentItem = cart[item];
    cartTotal += currentItem.priceInCents * currentItem.quantity;
  }
  return cartTotal;
}

function printCartInventory(cart) {
  let string = '';
  for (let item in cart) {
    let currentItem = cart[item];
      string += `${currentItem.quantity}x${item}\n`
  }
  return string;
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
