//declare variables

//count for wins and losses
var win = 0;
var loss = 0;

//to hold evolving user score
var score = 0;

//hold computer score
var compScore = 0;

//array to capture current value for each crystal
var values = [];


//new game function
function newGame() {

    //randomly generate computer score from 19 to 120
    compScore = Math.floor(Math.random() * (120 - 19)) + 19;

    //display computer score on screen
    $('#randomNumber').text(compScore);

    //randomly generate value of each crystal from 1 to 12
    //add if statements to ensure each crystal has a different value than the others
    for (i=0; i<4; i++) {
        var gemScore = Math.floor(Math.random() * 11) + 1;
        if (values.includes(gemScore)) {
            gemScore = Math.floor(Math.random() * 11) + 1;
        }
        values.push(gemScore);
    }
    console.log(values);

    //add crystal values to image
    $('#green').attr('data-crystalValue', values[0]);
    $('#pink').attr('data-crystalValue', values[1]);
    $('#yellow').attr('data-crystalValue', values[2]);
    $('#rainbow').attr('data-crystalValue', values[3]);

}

newGame();

//on click function for each crystal
$('.crystal').on("click", function() {
    //grab value of each crystal
    var crystalValue = parseInt($(this).attr("data-crystalValue"));

    //increment user score by crystal value
    score += crystalValue;
    console.log(score);

    //display user score on screen
    $('#userTotal').text(score);
});

//reset function
