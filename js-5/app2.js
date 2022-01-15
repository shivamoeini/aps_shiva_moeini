console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5




// One difference is that a string’s indexOf can search for a string containing more than one character, whereas the corresponding array method looks only for a single element.

console.log("one two three".indexOf("ee"));
// → 11


// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

console.log("                         okay \n ".trim());
// → okay


console.log(String(6).padStart(3, "0"));
// → 006
// You can split a string on every occurrence of another string with split and join it again with join.


// A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.

console.log("LA".repeat(3));
// → LALALA


We have already seen the string type’s length property. Accessing the individual characters in a string looks like accessing array elements (with a caveat that we’ll discuss in Chapter 5).

1
let string = "abc";
2
console.log(string.length);
3
// → 3
4
console.log(string[1]);
5
// → b