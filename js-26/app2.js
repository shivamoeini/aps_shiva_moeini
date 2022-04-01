class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}
const giles = new Person('Giles');
giles.introduceSelf(); // Hi! I'm Giles
console.log(giles);



class Professor extends Person {
    teaches;
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }

}
const giless = new Professor('Giles', "doctor");
giless.introduceSelf();

const giless1 = new Professor('Giles', "doctor");
giless1.grade("shivaaa");
console.log(giless);