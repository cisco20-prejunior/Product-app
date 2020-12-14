import { Product } from "./product.js";
import {UI} from "./UI.js";
import {Storage} from "./localStorage.js";
import  {generateUUID} from "./UUID.js";

new UI().getProduct();
// DOM Events

document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.toUpperCase(),
                price = document.getElementById("price").value,
                stock = document.getElementById("stock").value,
                id = generateUUID(),
                product = new Product(name, price,  stock, id);
        e.preventDefault();
        const ui = new UI();
        ui.resetform();
        const  storage = new Storage();

        if (name === "" || price === "" || stock === "") {
            return ui.showMessage("Complete the field please", "info")
        }        
        
        storage.saveProduct(product, ui);
        ui.showMessage("Product Add Succesfully", "success");
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
