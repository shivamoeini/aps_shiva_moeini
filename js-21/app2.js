// async, await
//ES8  2017


async function getData() {

    let client = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("shivaaa")
        }, 1000);
    })


    let clientlast = new Promise((reslove, rejeect) => {
        setTimeout(() => {
            reslove("moeinii")
        }, 5000);
    })


    let clientinfo = await client
    let clientfamily = await clientlast
    console.log(clientinfo);
    console.log(clientfamily);


    let getSuccess = true

    if (getSuccess) {
        return "GET DATA SUCCESSFULY..."
    } else {
        throw new Error("NOT FOUND...")
    }
}


async function show() {
    let data = await getData()
    console.log(data);
}
show()