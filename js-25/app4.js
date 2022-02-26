class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 2022);
    }
    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
}

const mary = new Person('Mary', 'Williams', '7-19-2000');
// console.log(mary.calculateAge());
console.log(mary);
mary.getsMarried('Thompson');
console.log(mary);
// console.log(mary.greeting());