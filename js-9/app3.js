let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.ceil(Math.random() * 6);

console.log(dice1);
console.log(dice2);

const rolledTheDice = `you rolled a ${dice1} and a ${dice2}, they sum up to: ${dice1 + dice2}`;

console.log(rolledTheDice);