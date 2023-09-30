// ITERATION 1

function updateSubtotal(product) {
  // console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  // console.log(price, quantity);
  let subtotal = price * quantity;
  // console.log(subtotal);
  let textSubtotal = product.querySelector(".subtotal span");
  textSubtotal.textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  let arrSubtotal = [];
  const allProduct = document.querySelectorAll(".product");
  for (const element of allProduct) {
    //   console.log(element);
    updateSubtotal(element);
    let subtotal = updateSubtotal(element);
    arrSubtotal.push(subtotal);
    // console.log(arrSubtotal);
    // return arrSubtotal;
  }
  const totalScore = arrSubtotal.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  // console.log(totalScore);
  let scroreFinal = document.querySelector("#total-value span");
  // console.log(scroreFinal);
  scroreFinal.textContent = totalScore;
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 3
  // let subtotal = document.querySelector(".subtotal span").textContent;
  // console.log(textSubtotal.textContent);
  // let arrProd = [];
  // const allProduct = arrProd.filter((prod) => prod.class === "product");
  // arrProd.push(allProduct);
  // console.log(arrProd[i]);
  // updateSubtotal(allProduct);
  // end of test
  // allProduct.forEach((productRow) => {
  //   updateSubtotal(productRow);
  // });
  // ITERATION 2
  // const products = document.querySelectorAll(".product");
  // for (const element of arrProd) {
  // let arrProd = [];
  // for (let i = 0; i < arrProd.length; i++) {
  // const element = arrProd[i];
  //   updateSubtotal(products[i]);
  // updateSubtotal(element);
  // console.log(arrProd[i]);
  // let subTotal = element.querySelector(".subtotal span").innerHTML;
  // arrProd.push(subTotal);
  //   console.log(arrProd);
}
// }

calculateAll();
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
