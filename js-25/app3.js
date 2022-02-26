//crate c 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greeting = function() {
    return `welcome tooo ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('shiva', 'moeini');

console.log(person1.greeting());