//GAME CODE START
$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var playerTotal;

//function to generate a random number
    function getRandomNumber (minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    };


//random number (19-120) is generated and displayed on page
    var random = getRandomNumber(19, 120);

//number is displayed on page
    $("#guessNumber").text(random);

//Four random crystal values are generated (1-12) and assigned to each DOM element
    $(".crystal").each(function() {
        var crystalValue = getRandomNumber(1, 12);
        $(this).data("value", crystalValue);
    });


//player clicks on crystal to start interaction
    $(".crystal").click(function() {

//Function to take player total and compare it to the randomly generated number
    function checkScore() {
        if (playerTotal === random) {
    
//if it matches, win is displayed, wins are incremented, and new numbers generated (game reset)
            $("#announce").text("You win!!");
            wins++;
            $("#wins").text(wins);
          }

//if it is greater than the random number, loss is displayed, losses are incremented, and new numbers generated (game reset)      
          else if (playerTotal > random) {
            $("#announce").text("You lose!!");
            losses++;
            $("#losses").text(losses);
          }
    };

//value of the clicked on crystal is console logged and stored in a variable
        console.log($(this).data("value"));

        var amount = $(this).data("value");

//the current score is grabbed from the page and converted to an integer
        var currentScore = parseInt($("#playScore").text(), 10);

//these amounts are added to get the new player total and it is displayed on the page
        playerTotal = currentScore + amount;
        $("#playScore").text(playerTotal);

//function is called to check the score
        checkScore();
    });

});
