// string

// "   " => string
// '   ' => string
// Exaple
// "10"
// "30"
// '100'
// "true"
// let x = 'disn\'t table';
// console.log(x);

// Indexes start at 0
// We can access the index by[] after the name of its variable
// We can use.length to see how many characters includes
// We can concatenate(add) the strings
// we can add numbers to strings, we will receive string finally

// const number = "Instance methods";
// console.log(number[8]);


// concatonation
// let names = "Shiva"
// let family = "Moeini"
// let numFam = names + family
// console.log(numFam);

// let year = "2000"
// year += 1;
// console.log(year);


// metod string
//1)* String.charAt()
// const sentence = 'The quick brown fox jumps over the lazy dog.'
// let index = 4
// console.log(`${sentence.charAt(index)}`);
// console.log(sentence.charAt(-1));

//2)*
// String.concat()
// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));


// 3)*
// String.includes()
// const sentence = 'The quick brown fox jumps word over the lazy dog.'
// console.log(` is  ${sentence.includes("word")}`);



// 4)*
// String.indexOf()
// const sentence = 'The quick brown dog fox jumps word over the lazy dog.'
// const searchTerm = 'dog';
// const indexOfFirst = sentence.indexOf(searchTerm);
// console.log(indexOfFirst);

// console.log(sentence.indexOf("dog"));


// 5)*
// String.repeat()
// let names = "shiva"
// console.log(names.repeat(5));


// 6)*
// String.replace()
// const sentence = 'The quick brown dog fox jumps word over the lazy dog.'
// console.log(sentence.replace("dog", "cat"));
// String.replaceAll()
// console.log(sentence.replaceAll('dog', 'monkey'));


// 7 )*
// String.slice()

// const str = 'The quick brown fox jumps over the lazy dog.';

// console.log(str.slice(31));

// console.log(str.slice(4, 19));
// expected output: "quick brown fox"

// console.log(str.slice(-4));
// expected output: "dog."

// console.log(str.slice(-9, -5));
// expected output: "lazy"



// 8)*
// String.split()
// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);
// expected output: "fox"

// const chars = str.split('');
// console.log(chars[8]);
// expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


// 9)*
// string.substring()
// const str = 'The quick brown fox jumps over the lazy dog';
// console.log(str.substring(6, 10));

// 10)*
// String.toUpperCase()
// String.toLowerCase()
// const str = "the quick brown fox jumps over the lazy dog"
// const str = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG';
// console.log(str.toLowerCase());


//11)*
// String.trim()
// str = "                    the quick brown"
// console.log(str);
// console.log(str.trim());



/////////////////////****guiz*****//////////////////////
// let x = "sKateboard"; ///beard
// let sum = x.slice(5)
// let sum1 = sum.replace("board", "beard")
// console.log(sum1);


// let sum = x.replace("board", "beard")
// console.log(sum);