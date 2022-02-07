const form = document.querySelector("form")
const ul = document.querySelector("#list")
form.addEventListener("submit", e => {
    e.preventDefault();
    const quantity = e.target.qty.value;
    const product = e.target.product.value;


    const li = document.createElement("li")
    li.textContent = `${quantity}-${product}`;


    ul.append(li);



    e.target.qty.value = "";
    e.target.product.value = "";
})