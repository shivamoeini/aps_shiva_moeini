//1 event
document.querySelector("#button1").addEventListener("click", loadEmploye)
document.querySelector("#button2").addEventListener("click", loadEmployes)

function loadEmploye() {

    //2 create object xmlhttprequst
    const xhr = new XMLHttpRequest()

    //3 open one requst 
    xhr.open("GET", "data.json", true)

    // 4 load response
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            const output = `
            <ul>
                <li>ID:${response.id}</li>
                <li>Name:${response.name}</li>
                <li>Compony:${response.compony}</li>
                <li>job:${response.job}</li>
            </ul>
            `
            document.querySelector("#employee").innerHTML = output
        }
    }
    xhr.send()
}







function loadEmployes() {
    //2 create object xmlhttprequst
    const xhr = new XMLHttpRequest()

    //3 open one requst 
    xhr.open("GET", "data1.json", true)

    // 4 load response
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            let output = ""
            response.forEach(employe => {

                output += `
                <ul>
                    <li>ID:${employe.id}</li>
                    <li>Name:${employe.name}</li>
                    <li>Compony:${employe.compony}</li>
                    <li>job:${employe.job}</li>
                </ul>
                `
            });
            document.querySelector("#employees").innerHTML = output
        }
    }
    xhr.send()
}