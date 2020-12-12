import {UI} from "./UI.js";

export {saveProduct, getProduct, deleteStorage} 
function  saveProduct(product) {
    if (localStorage.getItem("products") === null){
        let products = [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
    } else {
        let products = JSON.parse(localStorage.getItem("products"));
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products)); 
    }
}
function getProduct() {
    let products = JSON.parse(localStorage.getItem("products"));
    const ui = new UI();
    if (products === null){
        return 
    } else {
        for  ( let i = 0  ;  i < products.length ;  i++) {
            ui.addProduct(products[i]);
        }
    }
    
}
function deleteStorage(id){
    let products = JSON.parse(localStorage.getItem("products"));

    for ( let i = 0; i < products.length ; i++){
        if (products[i].id === id){
            products.splice( i , 1 )
        } 
    }
    localStorage.setItem( "products" , JSON.stringify(products));
}