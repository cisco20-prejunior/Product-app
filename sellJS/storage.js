export class Storage{
    updateStorage(product){
        const products = JSON.parse(localStorage.getItem("products"));
        
        for (let producto in products){
            if(products[producto].name == product.name){
                const newStock = products[i].stock - product.amount;
                if(newStock <= 0){
                    alert("Está vendiendo más producto del que tiene");
                    return true
                } else {
                    products[producto].stock = newStock;
                }
            }
        }
        localStorage.setItem( "products" ,JSON.stringify(products));
    }
}