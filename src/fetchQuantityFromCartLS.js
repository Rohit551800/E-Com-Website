import { getCartProductFromLS } from "./getCartProducts"

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductFromLS();

    let existing = cartProducts.find(item => item.id === id);

    if(existing){
        return {
            quantity: existing.quantity,
            price: existing.price ?? price
        };
    }

    return {
        quantity: 1,
        price: price
    };
};