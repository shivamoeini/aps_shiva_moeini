// callback hell

//ravesh1

// setTimeout(() => {
//     document.body.style.backgroundColor = "red"
// }, 1000);
// setTimeout(() => {
//     document.body.style.backgroundColor = "orange"
// }, 2000);
// setTimeout(() => {
//     document.body.style.backgroundColor = "yellow"
// }, 3000);
// setTimeout(() => {
//     document.body.style.backgroundColor = "blue"
// }, 4000);
// setTimeout(() => {
//     document.body.style.backgroundColor = "green"
// }, 5000);





//ravesh2

// let time = 2000;

// setTimeout(() => {
//     document.body.style.backgroundColor = "red"
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange"
//         setTimeout(() => {
//             document.body.style.backgroundColor = "blue"
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "yellow"
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "green"
//                 }, time);
//             }, time);
//         }, time);
//     }, time);
// }, time);




//ravesh3


// const deyledColourChange = (newClour, daley) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newClour;
//     }, daley);
// }

// deyledColourChange("green", 2000)
// deyledColourChange("red", 4000)
// deyledColourChange("orange", 8000)
// deyledColourChange("blue", 10000)








///ravesh4
let time = 2000;
const daleyColourChange = (newColur, daley, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColur;
        doNext && doNext()
    }, daley);
};


daleyColourChange("red", time, () => {
    daleyColourChange("blue", time, () => {
        daleyColourChange("green", time)
    })
})