
export class Storage {
    saveProduct(product, ui) {
    
        if (localStorage.getItem("products") === null){
            let products = [];
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
            ui.addProduct(product);
        } else {
            const products = JSON.parse(localStorage.getItem("products"));
            for (let i = 0 ; i < products.length & products.length !=0  ; i++){
                if (products[i].name === product.name) {
                    products[i] = product;
                    localStorage.setItem("products", JSON.stringify(products))
                    ui.updateProduct(product);
                    return ui.showMessage("Product change Succesfully", "success");
                }
            }
            ui.addProduct(product);
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products)); 
        }
        
    }

    deleteStorage(id){
        let products = JSON.parse(localStorage.getItem("products"));
    
        for ( let i = 0; i < products.length ; i++){
            if (products[i].id === id){
                products.splice( i , 1 )
            } 
        }
        
        if (products.length === 0) {
            localStorage.removeItem("products");
            return
        }

        localStorage.setItem( "products" , JSON.stringify(products));
    }
}
