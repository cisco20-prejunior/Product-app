import { Product } from "./product.js";
import {UI} from "./UI.js";
import {Storage} from "./localStorage.js";
import  {generateUUID} from "./UUID.js";

new UI().getProduct();
// DOM Events
document.getElementById("darkMode").addEventListener("change", () =>{
    const ui = new UI();
    ui.darkMode();
})
window.addEventListener("load", () =>{
    const dark = document.getElementById("darkMode");
    const ui = new UI();
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        dark.checked = true;
        ui.darkMode()
    }
})
document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.toUpperCase(),
                price = parseInt(document.getElementById("price").value),
                stock = parseInt(document.getElementById("stock").value),
                id = generateUUID(),
                product = new Product(name, price,  stock, id);
        e.preventDefault();
        const ui = new UI();
        const  storage = new Storage();

        if (name === "" || price === "" || stock === "") {
            return ui.showMessage("Complete the field please", "warning")
        }
        if (darkMode.checked){
            storage.saveProduct(product, ui, "dark", "light")
        } else {
            storage.saveProduct(product, ui, "light", "dark")
        }     
        ui.resetform();
    })

document.getElementById("product-list").addEventListener("click", (e) =>{
    const divID = e.target.parentElement.parentElement.parentElement;
    const ui = new UI();
    const storage = new Storage();
    storage.deleteStorage(divID.id);
    ui.deleteProduct(e.target)
    if (e.target.classList.contains("btn")){
        ui.showMessage("Product Delete Succesfully", "danger");
    }
    
})
