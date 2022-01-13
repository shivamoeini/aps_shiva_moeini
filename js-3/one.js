// let doh = "Doh";
// console.log(typeof doh.toUpperCase);


// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// // → [1, 2, 3, 4, 5]
// console.log(sequence.pop());
// // → 5
// console.log(sequence);
// // → [1, 2, 3, 4]


// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
//   };
//   console.log(day1.squirrel);
//   // → false
//   console.log(day1.wolf);
//   // → undefined
//   day1.wolf = true;
//   console.log(day1.wolf);
//   // → false





  let anObject = {left: 1, right: 2};
// console.log(anObject.left);
// → 1
// delete anObject.left;
// console.log(anObject.left);
// → undefined
// console.log("left" in anObject);
// → false
// console.log("right" in anObject);
// → true

// console.log(Object.keys(anObject));


// console.log(Object.keys({x: 0, y: 0, z: 2}));
// // → ["x", "y", "z"]

// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);
// // → {a: 1, b: 3, c: 4}


// let array1 = [{one:[1, 2, 3, 4],pizaa:false },5,6]
// let journal = [
//   {events: ["work", "touched tree", "pizza","running", "television"],
//    squirrel: false},
//   {events: ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"],
//    squirrel: false},
//   {events: ["weekend", "cycling", "break", "peanuts","beer"],
//    squirrel: true},
//   /* and so on... */
// ];



// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// // console.log(typeof object2);
// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false

// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object1.value);
// // → 15
// console.log(object3.value);
// // → 10





// const score = {visitors: 0, home: 0};
// // This is okay
// score.visitors = 1;
// // This isn't allowed
// score = {visitors: 1, home: 1};



// let journal = [];

// function addEntry(events, squirrel) {
//   journal.push({events, squirrel});
// }



let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

let number = ["one", "two", "three", "fore", "five", "six"];
console.log(["shiva","sarah",...number,"zahra"]);