const Person = function(name, birthYear) {

    this.name = name;

    this.birthYear = birthYear;

}

const jonas = new Person('jonas', 1990);

console.log(jonas); // { birthYear: 1990, name: “jonas”}

const ayush = new Person("ayush", 1992);

console.log(ayush); // { birthYear: 1992, name: “ayush”}

console.log(ayush instanceof Person); //true

//Prototypes

Person.prototype.calcAge = function() {

    console.log(2021 - this.birthYear);

}

// jonas.calcAge(); //31

// ayush.calcAge(); //29

// console.log(ayush.__proto__); // {calcAge: ƒ, constructor: ƒ}

// console.log(ayush.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jonas)); //true

// console.log(Person.prototype.isPrototypeOf(ayush)); //true

// console.log(Person.prototype.isPrototypeOf(Person)); //false

// Person.prototype.species = 'Homo sapiens';

// console.log(ayush.species); // Homo sapiens

// console.log(ayush.hasOwnProperty('name')) //true

// console.log(ayush.hasOwnProperty('species')) //false

// console.log(jonas.hasOwnProperty('name')) //true

console.log(jonas.__proto__);
//{ species: “Homo sapiens”, calcAge: f, constructor: f}

console.log(jonas.__proto__.__proto__);
//{ constructor: f, _defineGetter_: f, _defineSetter_: f, hasOwnProperty: f, ….}

// console.log(jonas.__proto__.__proto__.___proto__);
// //null

// console.dir(Person.prototype.constructor);
// //constructor property points back at person

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__); //contains all the built-in array methods
// console.log(arr.__proto__ === Array.prototype); //true

// console.log(arr.__proto__.__proto__); //all object properties
// console.log(arr.__proto__.__proto__.__proto__); //null

// const h1 = document.querySelector('h1');
// console.dir(h1); //object
// console.log(x => x * 2); //object