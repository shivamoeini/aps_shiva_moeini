// AJAX

//botton1

// 1 event
document.querySelector(".btn1").addEventListener("click", loadData1)

function loadData1() {
    // 2 create one object  xmlhttprequst
    const xhr = new XMLHttpRequest();

    // 3 open one requst 
    xhr.open("GET", "index1.html", true)

    // 4 load respons
    xhr.onload = function() {
        if (this.status === 200) {
            document.querySelector("#output").innerHTML = this.responseText
        }
    }

    // 5 send requst
    xhr.send()
}


//botton2

document.querySelector(".btn2").addEventListener("click", loadData2)

function loadData2() {
    // 2 create one object  xmlhttprequst
    const xhr = new XMLHttpRequest();

    // 3 open one requst 
    xhr.open("GET", "index2.html", true)

    // 4 load respons
    xhr.onload = function() {
        if (this.status === 200) {
            document.querySelector("#output").innerHTML = this.responseText
        }
    }

    // 5 send requst
    xhr.send()
}



//botton3

document.querySelector(".btn3").addEventListener("click", loadData3)

function loadData3() {
    // 2 create one object  xmlhttprequst
    const xhr = new XMLHttpRequest();

    // 3 open one requst 
    xhr.open("GET", "index3.html", true)

    // 4 load respons
    xhr.onload = function() {
        if (this.status === 200) {
            document.querySelector("#output").innerHTML = this.responseText
        }
    }

    // 5 send requst
    xhr.send()
}