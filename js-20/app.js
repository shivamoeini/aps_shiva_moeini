//the callback version


// const fakeRequstCallback = (url, succes, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure("Connection timeeout ):");
//         } else {
//             succes(`Success Connection ${url}`);
//         }
//     }, delay);
// }



// fakeRequstCallback("books.com\page1",
//     function(response) {
//         console.log("page1    =>", response);
//         fakeRequstCallback("books.com/page2",
//             function(response) {
//                 console.log("page2     =>", response);
//                 fakeRequstCallback("book.com/page3",
//                     function(response) {
//                         console.log("page3   =>", response);
//                     },
//                     function(err) {
//                         console.error("page3  =>", err);
//                     })
//             },
//             function(err) {
//                 console.error("page2   =>", err);
//             })
//     },
//     function(err) {
//         console.error("page1   =>", err);
//     })





//thenpromis version


// const fakeRequstCallback = url => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject("Connection timeout ):")
//             } else {
//                 resolve(`Success Connectio ${url} `)
//             }
//         }, delay);
//     })
// }



// fakeRequstCallback("promise.come/page1")
//     .then(() => {
//         console.log("page1");
//         fakeRequstCallback("promise.come/page2")
//             .then(() => {
//                 console.log("page2");
//                 fakeRequstCallback("promise.come/page3")
//                     .then(() => {
//                         console.log("page3");
//                     })
//                     .catch(err => console.error(err))
//             })
//     })
//     .catch(err => console.error(err))



const fakeRequstCallback = url => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection timeout ):")
            } else {
                resolve(`Success Connectio ${url} `)
            }
        }, delay);
    })
}

fakeRequstCallback("promise.com/page1")
    .then(data => {
        console.log("page1   =>", data);
        return fakeRequstCallback("promise.com/page2")
    })
    .then(data => {
        console.log("page2   =>", data);
        return fakeRequstCallback("promise.com/page3")
    })
    .catch(err => {
        console.error("oh no...", err);
    })