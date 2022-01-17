let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
// Overriding derived properties
// When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself.If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object’ s own property.

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small