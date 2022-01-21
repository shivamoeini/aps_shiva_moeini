//  a function that accepts functions as parameters and/or returns a function.   HOC (Higher Order Components)
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);