var targetNumber;

//Declare global variables
var blueCrystal;
var greenCrystal;
var redCrystal;
var yellowCrystal;
var score;
var wins = 0;
var losses = 0;

function init() { 
    targetNumber = Math.floor((Math.random() * 51) +1 );

    document.getElementById("randomNumber").innerHTML = targetNumber;

    //Randomize each crystal and set score to zero
    blueCrystal = Math.floor((Math.random() * 11) +1 );
    greenCrystal = Math.floor((Math.random() * 11) +1 );
    redCrystal = Math.floor((Math.random() * 11) +1 );
    yellowCrystal = Math.floor((Math.random() * 11) +1 );
    score = 0;
}
$(document).ready(function () {

    //Get random number and post to DOM
    targetNumber = Math.floor((Math.random() * 51) +1 );

    document.getElementById("randomNumber").innerHTML = targetNumber;

    //Randomize each crystal and set score to zero
    blueCrystal = Math.floor((Math.random() * 11) +1 );
    greenCrystal = Math.floor((Math.random() * 11) +1 );
    redCrystal = Math.floor((Math.random() * 11) +1 );
    yellowCrystal = Math.floor((Math.random() * 11) +1 );
    score = 0;
    wins = 0;
    losses = 0;

    //set "on click" and add value to score
    $('#blue').on("click", function () {
        $('#guessedNumber').html(blueCrystal);
        score += blueCrystal;
        $('#addedScore').html(score);
    });

    $('#green').on("click", function () {
        $('#guessedNumber').html(greenCrystal);
        score += greenCrystal;
        $('#addedScore').html(score);
    });

    $('#red').on("click", function () {
        $('#guessedNumber').html(redCrystal);
        score += redCrystal;
        $('#addedScore').html(score);
    });

    $('#yellow').on("click", function () {
        $('#guessedNumber').html(yellowCrystal);
        score += yellowCrystal;
        $('#addedScore').html(score);
    });

    //Determine whether player wins or loses
    $('.crystal').on("click", function () {
        if (score === targetNumber) {
            $('#addedScore').html("You win!");
            wins++;
            $('#wins').text(wins);
            init();
        }

        else if (score >= targetNumber) {
            $('#addedScore').html("You lose!!");
            losses++;
            $('#losses').text(losses);
            init();
        }
    });
});