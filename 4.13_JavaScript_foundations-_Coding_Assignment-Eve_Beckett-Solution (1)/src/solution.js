/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let result = null;
  for (const currentProduct of products) {
    if (currentProduct.name === name && currentProduct.availableSizes.includes(size)) {
      return currentProduct;
    }
    
  }
  return result;
}

function addProductToCart({name,priceInCents}, cart = {}) {
  let newProduct = {
    priceInCents,
    quantity: 1
  };  
  if(!cart[name]) {
      cart[name] = newProduct
  } else {
    cart[name].quantity++;  
  } 
  return cart;
}

function calculateTotal(cart) {
  let totalPrice = 0;
  
  for (let product in cart) {
    let itemPrice = cart[product].priceInCents * cart[product].quantity;
    totalPrice += itemPrice;
  };
  
  return totalPrice;
}

function printReceipt(cart) {
  
  if (Object.keys(cart).length < 1) {
    return null;
  } else {
    
  let receipt = "";
    
  for (product in cart) {
    let total = cart[product].priceInCents * cart[product].quantity;
    receipt += `${cart[product].quantity}x${product} - ${printablePrice(total)}\n`    
  }
    return receipt + `Total: ${printablePrice(calculateTotal(cart))}`;
  }
  
}
module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
