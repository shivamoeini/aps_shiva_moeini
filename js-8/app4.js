Array.prototype.

console.log(Object.getPrototypeOf(Math.max) ==
    Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
    Array.prototype);
// → true
// Such a prototype object will itself have a prototype, often Object.prototype, so that it still indirectly provides methods like toString.

// You can use Object.create to create an object with a specific prototype.

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'