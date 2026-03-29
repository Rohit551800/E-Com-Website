export function showToast(operation , id){
    const toast = document.createElement("div");
    toast.classList.add("toast");


    if(operation === "add"){
        toast.textContent = `Product Added To Cart`;
    }
    else if(operation === "delete"){
        toast.textContent = "Product has been removed";
    }
    else{
        toast.textContent = "Product already exist in cart";
    }

    document.body.appendChild(toast);


    setTimeout(() => {
        toast.style.animation = "toastOut 0.3s ease forwards";
        setTimeout(() => toast.remove(), 300);
}, 1700);
}