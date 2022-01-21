const person = {
    firstName: "Jake",
    lastName: "Gyllenhaal",
    age: 40,
    born: "california",
};

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person["first" + "Name"]);

let num = "age";
//define an expression
let firstName = `${num}`;
console.log(person[firstName]);