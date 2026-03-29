import products from '../api/products.json'
import { getCartProductFromLS } from './getCartProducts'
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { removeTheCardFromCart } from './removeTheCardFromCart';
import { incrementDecrement } from './incrementDecrement';
import { updatedCartProductTotal } from './updateCartProductTotal';


let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
})

//console.log(filterProducts);


const cartElement = document.querySelector("#productCartContainer"); 
const tempelateContainer = document.querySelector("#productCartTemplate"); 



const showCartProduct = () => {
    filterProducts.forEach(curElem => {
        const {category , id , image , name , stock , price } = curElem ;
        let productClone = document.importNode(tempelateContainer.content , true);

        const LSActualData = fetchQuantityFromCartLS(id , price);

        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`);
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".category").textContent = category ;


        productClone.querySelector(".productPrice").textContent = Number(LSActualData.price).toFixed(2);
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;
        

        productClone.querySelector(".stockElement").addEventListener('click' , (event) => incrementDecrement(event , id , stock , price));
        productClone.querySelector(".remove-to-cart-button").addEventListener('click' ,() => removeTheCardFromCart(id));
        

        cartElement.appendChild(productClone);
    });
}
document.addEventListener("DOMContentLoaded", () => {
    showCartProduct();
    updatedCartProductTotal();
});