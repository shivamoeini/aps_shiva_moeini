const div = document.querySelector(".test")

div.classList.add("circle")

let divTop = 50;
let divLeft = 50;


document.body.addEventListener("keydown", e => {
    switch (e.code) {
        case "ArrowUp":
            console.log((div.style.top = `${divTop--}px`))
            break;
        case "ArrowDown":
            console.log((div.style.top = `${divTop++}px`))
            break;
        case "ArrowRight":
            console.log((div.style.left = `${divLeft++}px`))
            break;
        case "ArrowLeft":
            console.log((div.style.left = `${divLeft--}px`))
            break;
        default:
            alert("Ignored");

    }
})