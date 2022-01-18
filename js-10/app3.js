const airplane = [
    ["niloofar", "kosar", "Fatemeh"],
    ["ali", "mohsen", "Shirin"],
    ["atena", "mahdi", "benyamin"],
    ["bani", "mohammad", "sina"],
    ["Amir", "Beti", "Pourya"],
];

// nest
for (let i = 0; i <= airplane.length - 1; i++) {
    console.log(`Row ${i + 1}`);
    console.log(airplane[i]);
    // for (let j = 0; j <= airplane[i].length - 1; j++) {
    //     console.log(`            Seat   ${j + 1} - ${airplane[i][j]}`);
    // }
    for (let passenger of airplane[i]) {
        console.log(`          ${passenger}`);
    }
}

// airplane.length
// iterate
// for ea