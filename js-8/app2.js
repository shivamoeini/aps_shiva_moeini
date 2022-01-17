speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
// → [0, 0.4, 0.6]
// If I had written the argument to map using the
// function keyword, the code wouldn’ t work.

// Prototypes
// Watch closely.

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]