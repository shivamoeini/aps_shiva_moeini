// // تابع سازنده

// function Person() {

//     this.name = 'John',

//         this.age = 23

// }

// // ساخت شی

// let person1 = new Person();

// let person2 = new Person();

// // اضافه کردن متد به تابع سازنده

// Person.prototype.greet = function() {

//     console.log('hello' + " " + this.name);

// }

// person1.greet(); // hello John

// person2.greet(); // hello John

// تابع سازنده

function Person() {

    this.name = 'John'

}

// اضاف کردن ویژگی

Person.prototype.age = 20;
console.log(Person.prototype);