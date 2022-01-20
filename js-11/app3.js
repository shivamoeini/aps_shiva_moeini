let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
    colors: ["spaceGray", "black", "white"],
    spec: {
        owner: 'vahid',
        age: 24,
        height: undefined
    }
}

// we can access the properties by dot notation
// console.log(laptop.brand)
// console.log(laptop.colors)
// console.log(laptop.colors[1][0])
// console.log(laptop.spec['age'])
console.log(laptop.spec.age)
console.log(laptop['spec'].age)
console.log(laptop['spec']['age'])

// another way
console.log(laptop['screenSize'])
console.log(laptop['colors'][2])