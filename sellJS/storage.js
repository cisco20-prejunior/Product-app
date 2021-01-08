export class Storage{
    updateStorage(product){
        const products = JSON.parse(localStorage.getItem("products"));
        
        for (let producto of products){
            if(producto.name == product.name){
                const newStock = producto.stock - product.amount;
                if(newStock <= 0){
                    alert("Está vendiendo más producto del que tiene");
                    return true
                } else {
                    producto.stock = newStock;
                }
            }
        }
        localStorage.setItem( "products" ,JSON.stringify(products));
    }
    darkStorage(btn){
        localStorage.setItem("dark", btn.checked)
    }
}