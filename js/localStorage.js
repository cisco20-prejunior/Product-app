
export class Storage {
    saveProduct(product) {
    
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

    deleteStorage(id){
        let products = JSON.parse(localStorage.getItem("products"));
    
        for ( let i = 0; i < products.length ; i++){
            if (products[i].id === id){
                products.splice( i , 1 )
            } 
        }
        localStorage.setItem( "products" , JSON.stringify(products));
    }
}
