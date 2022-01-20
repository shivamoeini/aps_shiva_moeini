const mystery = 'answer'
const num = 21

const inverseOfPI = 1 / Math.PI;


const jasem = {
    p1: 10,
    p2: 20,
    f1() {}, // function declaration
    f2: () => {},
    [mystery]: 21,
    // inverseOfPI: inverseOfPI // we can use the below syntax (es6) 
    inverseOfPI
}


// console.log(obj.p1)

console.log(jasem[mystery])
    // console.log(jasem.answer)

// console.log(jasem.inverseOfPI)


//  Quiz,   what is the value of this console.log?
// console.log(obj[mystery]); // this is gonna be converted to obj['answer']

// //Quiz,     what is the value of this console.log?
// console.log(obj.answer);