import { getCartProductFromLS } from "./getCartProducts";
import { updatedCartProductTotal } from "./updateCartProductTotal";


export const incrementDecrement = (event , id , stock , unitPrice) => {

    const currentElement = document.querySelector(`#card${id}`);
    const productQuantity = currentElement.querySelector(".productQuantity");
    const productPrice = currentElement.querySelector(".productPrice");

    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find(curProd => curProd.id === id);

    let quantity = existingProd ? existingProd.quantity : 1;

    // increment
    if(event.target.classList.contains('cartIncrement')){
        if(quantity < stock){
            quantity++;
        }
    }

    // decrement
    if(event.target.classList.contains('cartDecrement')){
        if(quantity > 1){
            quantity--;
        }
    }

    // ✅ FINAL PRICE (IMPORTANT)
    let price = Number((unitPrice * quantity).toFixed(2));

    // update array
    let updatedCart = localCartProducts.map(curProd =>
        curProd.id === id
            ? { id, quantity, price }
            : curProd
    );

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

    // UI update
    productQuantity.textContent = quantity;
    productPrice.textContent = price.toFixed(2);

    updatedCartProductTotal(); // ✅ now correct
};