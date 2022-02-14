let getData = new Promise((resolve, reject) => {
    let getSuccess = false;

    if (getSuccess) {
        resolve("GET DATA SUCCESSFULY...")
    } else {
        reject("NOT FOUND...")
    }
})

getData.then((result) => {
    console.log(result);

}).catch((result) => {
    console.log(result);
})