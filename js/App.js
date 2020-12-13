import { Product } from "./product.js";
import {UI} from "./UI.js";
import {Storage} from "./localStorage.js";
import  {generateUUID} from "./UUID.js";

new UI().getProduct();
// DOM Events
document.getElementById("product-form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById("name").value
        const price = document.getElementById("price").value
        const stock = document.getElementById("stock").value
        const id = generateUUID();
        const product = new Product(name, price,  stock, id);
        const products = JSON.parse(localStorage.getItem("products"));
        e.preventDefault();
        const ui = new UI();
        ui.resetform();
        const  storage = new Storage();

        if (name === "" || price === "" || stock === "") {
            return ui.showMessage("Complete the field please", "danger")
        }        

        for (let i = 0 ; i < products.length ; i++){
            if (products[i].name === product.name) {
                products[i] = product;
                localStorage.setItem("products", JSON.stringify(products))
                ui.updateProduct(product);
                ui.showMessage("Product change Succesfully", "success");
                return
            }
        }

        storage.saveProduct(product);
        ui.addProduct(product);
        ui.showMessage("Product Add Succesfully", "success");
})

document.getElementById("product-list").addEventListener("click", (e) =>{
    const divID = e.target.parentElement.parentElement.parentElement;
    const ui = new UI();
    const storage = new Storage();
    storage.deleteStorage(divID.id);
    ui.deleteProduct(e.target)
    if (e.target.classList.contains("btn")){
        ui.showMessage("Product Delete Succesfully", "info");
    }
    
})
