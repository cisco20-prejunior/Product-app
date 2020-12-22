import { Product } from "./product.js";
import {UI} from "./UI.js";
import {Storage} from "./localStorage.js";
import  {generateUUID} from "./UUID.js";

new UI().getProduct();
// DOM Events
document.getElementById("darkMode").addEventListener("change", () =>{
    const darkMode =  document.getElementById("darkMode"),
            body = document.getElementById("body"),
            card = document.getElementById("card"), 
            nav = document.getElementById("nav"),
            title = document.getElementById("cardTitle"),
            cardGroup = document.getElementsByClassName("cards"),
            cardText = document.getElementsByClassName("card-title");
    if(darkMode.checked){
        body.classList = "bg-dark";
        card.classList = card.className.replace("bg-light","bg-dark");
        nav.classList = nav.className.replace("navbar-dark bg-dark", "navbar-light bg-light")
        title.classList = "text-light"
        for(let i =0; i<cardGroup.length; i++){
            cardGroup[i].classList = cardGroup[i].className.replace("bg-light", "bg-dark")
        }
        for(let i =0; i<cardText.length; i++){
            cardText[i].classList = cardText[i].className.replace("text-dark", "text-light")
            
        }
    } else {
        body.classList = "bg-light";
        card.classList = card.className.replace("bg-dark", "bg-light")
        nav.classList = nav.className.replace("navbar-light bg-light", "navbar-dark bg-dark")
        title.classList = "text-dark";
        for(let i =0; i<cardGroup.length; i++){
            cardGroup[i].classList = cardGroup[i].className.replace("bg-dark", "bg-light")
        }
        for(let i =0; i<cardText.length; i++){
            cardText[i].classList = cardText[i].className.replace("text-light", "text-dark")
        }
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
