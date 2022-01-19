const airplane = [
    ["motahare", "anahid", "amirmostafa"],
    ["maryam", "amir", "mina"],
    ["fatemeh", "fereshte", "kian"],
    ["kosar", "mohammad", "yousof"],
    ["mohsen", "hoseyn ", "shaden"],
];
const mFunc = airplane.map(row => {
    console.log(row);
    let param = row.map(element => {
        console.log(element);
        return `       ${element.toUpperCase()};`

    });
    return param
})
console.log(mFunc);