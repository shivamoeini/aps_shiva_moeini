// Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.



// function name(params) {
    


// }


// function sqre(number) {
//   return  number * number
// }

// let y=sqre(5)
// console.log(y);
// const x = function name(params) {
    
// };
// const square = function (number) {
//     return number * number
// }
// var x = square(4)
// console.log(x);

// const factorial = function fac(n) {
//     return n < 2 ? 1 : n * fac(n - 1)
// }

// console.log(factorial(3))



// var myFunc;
// if (num === 0) {
//   myFunc = function(theObject) {
//     theObject.make = 'Toyota';
//   }
// }




function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);
  