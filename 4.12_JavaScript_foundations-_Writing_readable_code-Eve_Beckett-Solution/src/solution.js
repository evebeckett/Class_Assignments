/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    for (let j = 0; j < currentProduct.availableSizes.length; j++) {
      if (currentProduct.availableSizes[j] === size) {
        result.push(currentProduct);
      }
    }
  }
  return result;
}
function moreThanThreeProducts(products) {
  return !(products.length < 4);
}

function checkForSizeByName(products, name, size) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    if (currentProduct.name === name) {
      product = currentProduct;
    }
  }
  if (!product) {
    return false;
  }
  return (product.availableSizes.includes(size));
}
module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
