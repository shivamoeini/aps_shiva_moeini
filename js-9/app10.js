const board = [
    ["O", null, "X"],
    [null, null, "O"],
    ["X", "O", null],
]; //don't touch this line of code

//with one 'X' win the game
//write your code below this line

console.log(board[1][1]);
board[1][1] = "X";

console.log(board);