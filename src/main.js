import "../src/style.css"
import products from "../api/products.json"
import { showProductContainer } from "./productCards";
import "./aboutPage.js";
import "./contactPage.js";
// import "./footer.js"
// console.log(products);


// Call the function to display product as a card


showProductContainer(products);