import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updatedCartProductTotal } from "./updateCartProductTotal";
import { updatedCartValue } from "./updateCartValue";

export const addToCart = (event, id, stock) => {

  let arrLocalStorageProduct = getCartProductFromLS();
  const currentCardElement = document.querySelector(`#card${id}`);

  let quantity = currentCardElement.querySelector(".productQuantity").textContent;
  let price = currentCardElement.querySelector(".productPrice").textContent;
  price = price.replace('₹', '');

  let existingProd = arrLocalStorageProduct.find(curElem => curElem.id === id);

  if (existingProd) {

    if (Number(quantity) > 1) {
      let newQuantity = existingProd.quantity + Number(quantity);
      let newPrice = Number(newQuantity * price);

      let updatedCart = arrLocalStorageProduct.map((curProd) => {
        return curProd.id == id
          ? { id, quantity: newQuantity, price: newPrice }
          : curProd;
      });

      localStorage.setItem('cartProductsLS', JSON.stringify(updatedCart));
      updatedCartValue(updatedCart); 
      showToast("alreadyExist", id);

    } else {
      showToast("alreadyExist", id);
    }

    return;

  }

  price = Number(quantity * price);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem('cartProductsLS', JSON.stringify(arrLocalStorageProduct));

  showToast("add", id);
  updatedCartValue(arrLocalStorageProduct);

};