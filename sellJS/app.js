class Product {
    constructor(name, price, amount){
        this.name = name 
        this.price = price
        this.amount = amount
    }

}


class UI {
    addProduct(product, color, text){
        const productList = document.getElementById("list-product");
        const element = document.createElement("div");
                    // element.setAttribute("id", `${product.id}`)
        element.innerHTML = `
            <div class = "card text-center mb-4 bg-${color} cards">
                <div class = "card-body text-${text} card-title" id = "${product.name}">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product Amount</strong>: ${product.amount}
                    <strong>Product Price </strong>: ${product.price}
                    <strong>Total</strong>: ${product.price*product.amount}
                    <a href = "#" class = "btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    deleteProduct(element){
        if (element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    resetForm(){
        document.getElementById("amount").value = "";
    }
}

class Storage{
    updateStorage(product){
        const products = JSON.parse(localStorage.getItem("products"));
        
        for (let i = 0; i < products.length; i++){
            if(products[i].name == product.name){
                const newStock = products[i].stock - product.amount;
                if(newStock <= 0){
                    alert("Está vendiendo más producto del que tiene");
                } else {
                    products[i].stock = newStock;
                }
            }
        }
        localStorage.setItem( "products" ,JSON.stringify(products));
    }
}
//  Set de products on the list 

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
            if (darkMode.checked){
                ui.addProduct(product, "dark", "light")
            } else {
                ui.addProduct(product, "light", "dark")
            }
            storage.updateStorage(product);
            ui.resetForm();
})

document.getElementById("list-product").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.deleteProduct(e.target)
})

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
