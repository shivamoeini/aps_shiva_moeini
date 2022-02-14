let basket = ["macbook pro", "iphone", "apple"]


function show() {
    setTimeout(() => {
        basket.forEach(product => {
            console.log(product);
        })
    }, 1000);
}

function addNew(newproduct) {
    setTimeout(() => {
        basket.push(newproduct)
        show()
    }, 3000);
}
addNew("airpod")
    // show()