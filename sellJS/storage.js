export class Storage{
    updateStorage(product){
        const products = JSON.parse(localStorage.getItem("products"));
        
        for (let i = 0; i < products.length; i++){
            if(products[i].name == product.name){
                const newStock = products[i].stock - product.amount;
                if(newStock <= 0){
                    alert("Está vendiendo más producto del que tiene");
                    return true
                } else {
                    products[i].stock = newStock;
                }
            }
        }
        localStorage.setItem( "products" ,JSON.stringify(products));
    }
}