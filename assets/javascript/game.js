//GAME CODE START
$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var playerTotal;

//function to generate a random number
function getRandomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1) + minNumber);
}

function reset(){
    playerTotal = 0;
    $("playScore").text("0");

//random number (19-120) is generated and displayed on page
    var random = getRandomNumber(19, 120);

//number is displayed on page
    $("#guessNumber").text(random);

//Four random crystal values are generated (1-12)
    $(".crystal").each(function() {
        var crystalValue = getRandomNumber(1, 12);
        $(this).data("value", crystalValue);
    });
};

    //total is compared to random number
function checkScore() {
        if (playerTotal === random) {
    
    //if it matches, win is displayed, wins are incremented, and new numbers generated (game reset)
            $("#announce").text("You win!!");
            wins++;
            $("#wins").text(wins);
            reset();
          }

    //if it is greater than the random number, loss is displayed, losses are incremented, and new numbers generated (game reset)      
          else if (playerTotal > random) {
            $("#announce").text("You lose!!");
            losses++;
            $("#losses").text(losses);
            reset();
          }
    };

//player clicks on crystal, its value is added to display
$(".crystal").click(function() {
    console.log($(this).data("value"));
    var amount = $(this).data("value");
    var currentScore = parseInt($("#playScore").text(), 10);
    playerTotal = currentScore + amount;
    $("#playScore").text(playerTotal);
    checkScore();
});

reset();
});
