export const updatedCartValue = (cartProducts) => {
    const cartValue = document.querySelector('#cartValue');

    if (!cartValue) {
        return;
    }

    cartValue.innerHTML = `<i class='fa-solid fa-cart-shopping'> ${cartProducts.length} </i>`;
}