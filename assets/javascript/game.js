var wins = 0;
var losses = 0;

$(document).ready(function() {

//game is set so score value is set to 0
    var playerTotal = 0;

//random number (19-120) is generated and displayed on page
    var random = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//number is displayed on page
    $("#guessNumber").text(random);

//Four random crystal values are generated (1-12)
$(".buttons").each(function() {
        crystalValue = Math.floor(Math.random() * 12) + 1;
        $("img").val(crystalValue);
    if ( $(this).is( "#crystal4" ) ) {
      return false;
    }
  });

//player clicks on crystal, its value is added to display
$(".crystal").on("click", function() {

    var totalScore = crystalValue + totalScore;

    $("#playScore").text(totalScore);

//total is compared to random number
    if (playerTotal === random) {

//if it matches, win is displayed, wins are incremented, and new numbers generated (game reset)
        $("#announce").text("You win!!");
        wins++;
        $("#wins").text(wins);
        playerTotal = 0;
      } 
//if it is greater than the random number, loss is displayed, losses are incremented, and new numbers generated (game reset)      
      else if (playerTotal > random) {
        $("#announce").text("You lose!!");
        losses++;
        $("#wins").text(losses);
        playerTotal = 0;
      }

  });

  $("#playScore").text(playerTotal);

});
