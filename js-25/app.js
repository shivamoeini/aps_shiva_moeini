// this & constructor
// const Shiva = {
//     name: "shiva",
//     age: 20
// }
// const Zahra = {
//     name: "zahra",
//     age: 20
// }
// console.log(Shiva.age);
// console.log(Zahra.age);


// constructor\\

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this);
}
const Shiva = new Person("Shiva", 20);
const Zahra = new Person("Zahra", 21);

// console.log(Shiva);
// console.log(Zahra);