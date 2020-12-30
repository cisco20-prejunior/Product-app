export class UI {
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
    for(let card in cardGroup){
        cardGroup[card].classList = cardGroup[card].className.replace("bg-dark", "bg-light")
    }
    for(let card in cardGroup){
        cardText[card].classList = cardText[card].className.replace("text-light", "text-dark")
    }
}
    }

    resetForm(){
        document.getElementById("amount").value = "";
    }
}