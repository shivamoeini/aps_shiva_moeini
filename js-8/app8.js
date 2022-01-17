console.log(Array.prototype.toString ==
    Object.prototype.toString);
// → false
console.log([1, 2].toString());
// → 1,2
// Calling toString on an array gives a result similar to calling.join(",") on it— it puts commas between the values in the array.Directly calling Object.prototype.toString with an array produces a different string.That
// function doesn’ t know about arrays, so it simply puts the word object and the name of the type between square brackets.

console.log(Object.prototype.toString.call([1, 2]));
// → [object Array]