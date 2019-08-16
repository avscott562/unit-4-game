//declare variables
//count for wins and losses
//to hold evolving user score

//hold computer score
var compScore = 0;

//hold current value for each crystal
var greenScore = 0;
var pinkScore = 0;
var yellowScore = 0;
var rainbowScore = 0;

//functions and actions needed


//new game function
function newGame() {
    //randomly generate computer score from 19 to 120
    compScore = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("Hi the goal is " + compScore);

    //randomly generate value of each crystal from 1 to 12
    //add if statements to ensure each crystal has a different value than the others
    greenScore = Math.floor(Math.random() * 13);
    console.log("The value for the green crystal is " + greenScore);

    pinkScore = Math.floor(Math.random() * 13);
    console.log("The value for the pink crystal is " + pinkScore);

    yellowScore = Math.floor(Math.random() * 13);
    console.log("The value for the yellow crystal is " + yellowScore);

    rainbowScore = Math.floor(Math.random() * 13);
    console.log("The value for the rainbow crystal is " + rainbowScore);
}

newGame();
//random function for each crystal value
//on click function for each gem
//reset function
