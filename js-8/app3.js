console.log(Object.getPrototypeOf({}) ==
    Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
// As you guess, Object.getPrototypeOf returns the prototype of an object.