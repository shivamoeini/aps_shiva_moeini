let myFirstArray = [
    123,
    "Kosar",
    NaN,
    undefined, ["Benmyamin Eslami", 20],
    null,
    "hassan",
    true,
    false,
];

// DANGER
// the name of some of methods are same, BUT 1-they are not working the same always 2-there are lot's different methods for them
// WARNING

//methods of "strings": length / includes() / indexOf() / ....
//methods of "arrays": length / includes() / indexOf() / map() / forEach() / ....

// console.log(typeof myFirstArray[1][0]);

const colors = ["red", "orange", "yellow"];

//mutability

// console.log(colors[1]);

// colors[1] = "purple";

// console.log(colors);

colors[7] = "pink";

console.log(colors);

console.log(colors[80]);