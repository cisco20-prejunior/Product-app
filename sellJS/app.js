
//  Set de products on the list 
function setList(){
    const products = JSON.parse(localStorage.getItem("products")),
    list = document.getElementById("product-list"),
    element = document.createElement("option") ;


    for (let i =0; i < products.length; i++){
        list.innerHTML += `
        <option id ="${products[i].name}">
            ${products[i].name}
        </option>
        `;
    }
}
setList();

    let list =  document.getElementById("product-list");

    list.addEventListener("change", () =>{
        let selectedOption = list.options[list.selectedIndex];
        const products = JSON.parse(localStorage.getItem("products")),
                    price = document.getElementById("precio");
            for (let i =0; i < products.length; i++){
                if (products[i].name === selectedOption.id){
                    price.value = products[i].price;
                }
            }
        }
    )
// 