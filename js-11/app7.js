/* take a look at restaurant, your task is to:

1- create a variable named 'fullAddress' that points to a string using the information from restaurant.
2- full address should point to a string that includes the address, city, state, and zipcode from the restaurant object. 


good luck
*/

//PLEASE DO NOT TOUCH THIS LINE!
const restaurant = {
    name: "brother's of Rahmani except jafar",
    address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
    city: "Tehran",
    state: "Persia",
    zipcode: "99999",
};
//YOUR CODE GOES DOWN HERE:

const { address, city, state, zipcode } = restaurant;
// const fullAddress = console.log(`${address} .... `);
const fullAddress = [address, city, state, zipcode];
//spread oprator
console.log(...fullAddress);