// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  // Step 1: we store price and quantity inside two variables
  // Notice that we reference product, not document, because we are accessing price and quantity through the argument in the function, not directly reading from the html
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Step 2 - 3: we access our variables' inner text and value respectively in order to turn them into real numbers that can be used in mathematical operations through the Number() method. Then we multiply them.
  const subtotalPrice = Number(price.innerText) * Number(quantity.value);

  // Step 4: we look for the span contained in the <td class="subtotal">
  const subtotalElement = product.querySelector(".subtotal span");

  // Step 5: we change the innerText through DOM manipulation and then we return the number that we got from our multiplication
  subtotalElement.innerText = subtotalPrice;
  return subtotalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
