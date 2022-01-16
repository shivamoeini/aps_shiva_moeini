// A string can be repeated with the repeat method, which creates a new string containing multiple copies of the original string, glued together.


console.log("LA".repeat(3));
// → LALALA


let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b


function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
  console.log(max(4, 1, 9, -2));
  // → 9




  let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7


let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]