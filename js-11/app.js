{
    //Block Scope
    {
        //Nested Block Scope!
        // let, const
    }
}

if (true) {
    //Block Scope
    const j = 0
}


// console.log(j)


// you can access block scope with var
for (let i = 1; i <= 0; i++) {
    //Block Scope
}


// console.log(i);


// you can't access the function scope even with var
function sum(a, b) {
    //Function Scope
    // var in function scope can't go out
    var result = a + b;

    // global values should not be used anywhere in you codes 
    x = 4
}

console.log(sum(4, 5));

console.log(result);

// console.log(x)