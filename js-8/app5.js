function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}
// JavaScript provides a way to make defining this type of
// function easier.If you put the keyword new in front of a
// function call, the
// function is treated as a constructor.This means that an object with the right prototype is automatically created, bound to this in the
// function, and returned at the end of the
// function.

// The prototype object used when constructing objects is found by taking the prototype property of the constructor
// function.

function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");