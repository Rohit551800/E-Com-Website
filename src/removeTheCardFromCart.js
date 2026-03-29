import { getCartProductFromLS } from "./getCartProducts"
import { updatedCartValue } from "./updateCartValue"
import { showToast } from "./showToast";
import { updatedCartProductTotal } from "./updateCartProductTotal";


let cartProductData = getCartProductFromLS();
export const removeTheCardFromCart = (id) => {
    cartProductData = cartProductData.filter( curProd => curProd.id != id);
    localStorage.setItem("cartProductsLS" , JSON.stringify(cartProductData));


    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast('delete' , id);
    }
    updatedCartValue(cartProductData);
    updatedCartProductTotal();
}