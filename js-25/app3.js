//crate  constructor Person
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greeting = function() {
    return `welcome tooo ${this.firstName} ${this.lastName}`;
}

// const person1 = new Person('shiva', 'moeini');

// console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);