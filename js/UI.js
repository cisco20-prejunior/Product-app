
export class UI {
    addProduct(product, color, text){
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.id =  product.name;
        if (color == undefined || text == undefined){
            element.innerHTML = `
            <div class = "card text-center mb-4 bg-light cards">
                <div class = "card-body text-dark card-title">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Stock</strong>: ${product.stock}
                    <a href = "#" class = "btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        return productList.appendChild(element);
        }
        element.innerHTML = `
            <div class = "card text-center mb-4 bg-${color} cards">
                <div class = "card-body text-${text} card-title" id = "${product.name}">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Price</strong>: ${product.price}
                    <strong>Product Stock</strong>: ${product.stock}
                    <a href = "#" class = "btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    darkMode(){
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
        for(let card in cardGroup){
            cardGroup[card].classList = cardGroup[card].className.replace("bg-light", "bg-dark")
        }
        for(let card in cardText){
            cardText[card].classList = cardText[card].className.replace("text-dark", "text-light")
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
        }, 1000);

    }
}