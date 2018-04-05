$(document).ready(function () {

    var op = "";
    var score, red, green, red, yellow;

    document.getElementById("randomNumber").innerHTML =
    Math.floor(Math.random() * 51);

    // setInterval(function() {
    //     var number = Math.floor(Math.random() * 50);
    //     $('#randomNumber').html(number);
    // });

    $('#blue').on("click", function () {
        $('#guessedNumber').html(9);
    });

    $('#green').on("click", function () {
        $('#guessedNumber').html(3);
    });

    $('#red').on("click", function () {
        $('#guessedNumber').html(1);
    });

    $('#yellow').on("click", function () {
        $('#guessedNumber').html(6);
    });


    // $('.crystal').on("click", function() {
    //     var math_it_up = {
    //         'click': function (x, y) { return x + y },
    //     };
    //     $('#addedScore').html(math_it_up[addedScore](parseInt(left)));
    // });

});