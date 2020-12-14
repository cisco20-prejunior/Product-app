
export class UI {
    addProduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
                    element.setAttribute("id", `${product.id}`)
        element.innerHTML = `
            <div class = "card text-center mb-4">
                <div class = "card-body" id = "${product.name}">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Stock</strong>: ${product.stock}
                    <a href = "#" class = "btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetform(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        if (element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove();
        }

    }

    getProduct() {
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

    updateProduct(product){
        const change = document.getElementById(product.name);
        change.innerHTML = `
        <div class = "card-body" id = "${product.name}">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.stock}
                    <a href = "#" class = "btn btn-danger" name="delete">Delete</a>
                </div>
        `;
        this.showMessage("Product Update Succesfully", "alert alert-success");
    }

    showMessage(message, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // SHOWN IN THE DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);

        setTimeout( () =>{
            document.querySelector(".alert").remove()
        }, 1500);

    }
}