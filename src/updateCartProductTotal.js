import { getCartProductFromLS } from "./getCartProducts"

export const updatedCartProductTotal = () => {

    const subTotal = document.querySelector(".productSubTotal");
    const productGst = document.querySelector(".productTax");
    const finalTotal = document.querySelector(".productFinalTotal");

    let localCartProducts = getCartProductFromLS();

    let totalProductPrice = localCartProducts.reduce((accum , curElem) => {
        let productPrice = Number(curElem.price) || 0;
        return accum + productPrice;
    }, 0);

    let productGstValue = (totalProductPrice * 18) / 100;
    let finalTotalPrice = totalProductPrice + productGstValue;

    subTotal.textContent = totalProductPrice.toFixed(2);
    productGst.textContent = productGstValue.toFixed(2);
    finalTotal.textContent = finalTotalPrice.toFixed(2);
};