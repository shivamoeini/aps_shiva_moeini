// Objects come in two forms: the declarative (literal) form, and the constructed form.

// The literal syntax for an object looks like this:

var myObj = {
	key: value
	// ...
};


var myObj = new Object();
myObj.key = value;

// Note: It's extremely uncommon to use the "constructed form" for creating objects as just shown. You would pretty much always want to use the literal syntax form. The same will be true of most of the built-in objects (see below).

// Type
// Objects are the general building block upon which much of JS is built. They are one of the 6 primary types (called "language types" in the specification) in JS:

// string
// number
// boolean
// null
// undefined
// object

var strPrimitive = "I am a string";

console.log( strPrimitive.length );			// 13

console.log( strPrimitive.charAt( 3 ) );	// "m"



var myObject = {
	a: 2
};

myObject.a;		// 2

myObject["a"];	// 2