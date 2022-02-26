// let data = new Date()
// let data1 = new Date("December 17, 1995 03:24:00")

// console.log(data);
// console.log(data1);

function Person(name, dob) {
    this.name = name
    this.age = new Date(dob)
    console.log(this);
}
const Shiva = new Person("Shiva", "7-19-2000");