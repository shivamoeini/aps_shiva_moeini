//1 event
document.querySelector("#button1").addEventListener("click", users);

function users() {
    //2 create object xmlhttprequst
    const xhr = new XMLHttpRequest();

    //3 open one requst
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

    // 4 load response
    xhr.onload = function() {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = "";
            response.forEach((employe) => {
                output += `
                <ul>
                    <li>ID:${employe.id}</li>
                    <li>Name :${employe.name}</li>
                    <li>Username :${employe.username}</li>
                    <li>Email :${employe.email}</li>
                     <li><b>Address</b></li>
                    <ul>
                        <li>street :${employe.address.street}</li>
                        <li>suite :${employe.address.suite}</li>
                        <li>city :${employe.address.city}</li>
                        <li>zipcode :${employe.address.zipcode}</li>
                        <li><b>geo</b></li>
                        <ul>
                            <li>geo.lat :${employe.address.geo.lat}</li>
                            <li>geo.lng :${employe.address.geo.lng}</li>
                        </ul>
                    </ul>
                    <li>Phone :${employe.phone}</li>
                    <li>Website :${employe.website}</li>
                    <li><b>comany</b></li>
                    <ul>
                        <li>Name :${employe.company.name}</li>
                        <li>CatchPhrase:${employe.company.catchPhrase}</li>
                        <li>Bs :${employe.company.bs}</li>
                    </ul>
       
                </ul>
                `;
            });
            document.querySelector("#use").innerHTML = output;
        }
    };
    xhr.send();
}