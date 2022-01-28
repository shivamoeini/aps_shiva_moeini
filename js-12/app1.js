// var myCuteCat = {
//     name: "Angel",
//     age: 3,
//     isFeisty: true,
//     likes: ["rubber bands", "boxes", "4am petting sessions"],
//     fur: { colors: ["orange", "white"], pattern: "striped" },
//     meow: function() {
//         log("MEOOOWWW!");
//     }
// };

// // console.log(myCuteCat.fur.pattern);

// // console.log(myCuteCat["fur"]["pattern"]);


// console.log(meow());



// var willWatchMovie = function(ticketCost, isActionFlick) {
//     if (isActionFlick === true && ticketCost > 5) {
//         return "no";
//     } else if (ticketCost < 15) {
//         return "yes";
//     } else {
//         return "maybe";
//     }
// };


// let x = willWatchMovie(20, false);

// console.log(x);


// var favoriteFoods = ['Quiche', 'Carrots', 'Tuna'];
// favoriteFoods[2] = 'Lasagna';
// favoriteFoods[3] = 'Lasagna';

// favoriteFoods.append('Lasagna');
// favoriteFoods.push('Lasagna');

// for (var i = 0; i < favoriteFoods.length; i++) {
//     console.log(favoriteFoods[i]);
// }
// console.log(favoriteFoods);


var calculateFoodNeeded = function(numDays) {
    return numDays * 3;
};