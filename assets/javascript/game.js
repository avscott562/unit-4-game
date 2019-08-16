//declare variables
//count for wins and losses
//to hold evolving user score
//to hold computer score
var compScore = 0;
//for each gem to hold current value

//functions and actions needed
//new game function
//random function for computer score
function newGame() {
    compScore = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("Hi the goal is " + compScore);
}

newGame();
//random function for each crystal value
//on click function for each gem
//reset function
