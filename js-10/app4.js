const airplane = [
    ["motahare", "anahid", "amirmostafa"],
    ["maryam", "amir", "mina"],
    ["fatemeh", "fereshte", "kian"],
    ["kosar", "mohammad", "yousof"],
    ["mohsen", "hoseyn ", "shaden"],
];
let myfun = airplane.forEach(row => {
    console.log("row");
    row.forEach(paramet => {
        console.log("              " + paramet);
    })
})

for (const row of airplane) {
    console.log("row");
    for (const param of row) {
        console.log("                  " + param);
    }
}