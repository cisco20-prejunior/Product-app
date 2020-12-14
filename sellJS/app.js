
//  Set de products on the list 

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
