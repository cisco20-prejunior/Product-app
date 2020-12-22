import {Product} from "./product.js";
import {UI} from "./UI.js";
import {Storage} from "./storage.js";

//  Establecer los productos para el select 

window.addEventListener("load", () => {
    const products = JSON.parse(localStorage.getItem("products")),
    list = document.getElementById("product-list");

    document.getElementById("precio").value = products[0].price;
    for (let i =0; i < products.length; i++){
        list.innerHTML += `
        <option id ="${products[i].name}">
            ${products[i].name}
        </option>
        `;
    }

})

// Activar el modo oscuro   
document.getElementById("darkMode").addEventListener("change", () =>{
   const ui = new UI();
   ui.darkMode();
})

//  control del formilario para agregar productos
document.getElementById("sell-form")
    .addEventListener("submit", (e) =>{
        e.preventDefault();
        const name =  document.getElementById("product-list").value,
                price = parseInt(document.getElementById("precio").value),
                amount = parseInt(document.getElementById("amount").value),
                product = new Product(name, price, amount),
                ui =  new UI(),
                darkMode =  document.getElementById("darkMode"),
                storage = new Storage();
            if ( document.getElementById("amount").value === ""){
                alert("Por favor rellena los espacios necesarios");
                return
            }
            if ( storage.updateStorage(product)){
                return
            }
            if (darkMode.checked){
                ui.addProduct(product, "dark", "light")
            } else {
                ui.addProduct(product, "light", "dark")
            }
            ui.resetForm();
})

// eliminar producto
document.getElementById("list-product").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.deleteProduct(e.target)
})

// control del formulario para establecer el precio
document.getElementById("product-list").addEventListener("change", () =>{
        const products = JSON.parse(localStorage.getItem("products")),
                    price = document.getElementById("precio"),
                    list = document.getElementById("product-list");
        let selectedOption = list.options[list.selectedIndex];
            for (let i =0; i < products.length; i++){
                if (products[i].name === selectedOption.id){
                    price.value = products[i].price;
                }
            }
        }
    )
