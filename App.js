import { Product } from "./product.js";
import {UI} from "./UI.js";
import {saveProduct, getProduct, deleteStorage} from "./localStorage.js";
import  {generateUUID} from "./UUID.js";

getProduct()

// DOM Events
document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("name").value
        const price = document.getElementById("price").value
        const year = document.getElementById("year").value
        const id = generateUUID();
        const product = new Product(name, price,  year, id);

        const ui = new UI();
        if (name === "" || price === "" || year === "") {
            return ui.showMessage("Complete the field please", "danger")
            
        }
        
        saveProduct(product);

        ui.addProduct(product);
        ui.resetform();
        ui.showMessage("Product Add Succesfully", "success");
        

        e.preventDefault();
})

document.getElementById("product-list").addEventListener("click", (e) =>{
    const divID = e.target.parentElement.parentElement.parentElement;
    deleteStorage(divID.id);
    const ui = new UI();
    ui.deleteProduct(e.target)    
    ui.showMessage("Product Delete Succesfully", "info");

})
