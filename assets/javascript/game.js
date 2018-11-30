//GAME CODE START
$(document).ready(function() {
    var wins = 0;
    var losses = 0;

//function to generate a random number
function getRandomNumber (minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber + 1) + minNumber);
}

//random number (19-120) is generated and displayed on page
    var random = getRandomNumber(19, 120);

//number is displayed on page
    $("#guessNumber").text(random);

//Four random crystal values are generated (1-12)
    $(".crystal").each(function() {
        var crystalValue = getRandomNumber(1, 12);
        
        $("img").data("value", crystalValue);
    });

//player clicks on crystal, its value is added to display
var playerTotal = 0;

$(".crystal").click(function() {
//how to get this into a variable outside of the function???
    console.log($("img").val("value"));

    $("img").val("value") + playerTotal;
});

//total is compared to random number
    if (playerTotal === random) {

//if it matches, win is displayed, wins are incremented, and new numbers generated (game reset)
        $("#announce").text("You win!!");
        wins++;
        playerTotal = 0;
      } 
//if it is greater than the random number, loss is displayed, losses are incremented, and new numbers generated (game reset)      
      else if (playerTotal > random) {
        $("#announce").text("You lose!!");
        losses++;
        playerTotal = 0;
      }

$("#wins").text(wins);
$("#losses").text(losses);
$("#playScore").text(playerTotal);

});
