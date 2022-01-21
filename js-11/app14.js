function bankRobbery() {
    const heros = ["spiderman", "batman", "superman"];
    console.log("bankRobbery", heros);
    // let's write our codes here
    function whoHelps() {
        //LEXICAL scope
        const hero = heros[1];
        console.log(hero);

        function whoWins() {
            //LEXICAL scope
            const winner = "Superman";
            console.log("whoWins: ", heros);
            console.log("whoWins: ", hero);
            console.log("winner: ", winner);
        }

        whoWins();
    }
    whoHelps();
}

bankRobbery();