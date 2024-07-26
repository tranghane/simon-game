var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var randomNumber = -1;

//Starting the game:
var started = false;
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  //reset userPattern:
  userClickedPattern = [];
  randomNumber = Math.floor(Math.random() * 4);
  if (randomNumber == 4) {
    randomNumber = 3;
  }
  //get next color and put into game pattern
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomNumber); //testing

  //flask the color on screen
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //play the color sound
  playSound(randomChosenColour);

  //increase level:
  $("#level-title").text("Level " + level);
  level++;
}
$(document).on("click", ".btn", function () {
  // Get the ID of the clicked button
  var userChosenColour = this.id;
  console.log(userChosenColour); //test
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // You can perform further actions based on the userChosenColour here

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(curIndex) {
  if (userClickedPattern[curIndex] === gamePattern[curIndex]) {
    //if chosen the correct one, keep going, until the last color:
    if (userClickedPattern.length === gamePattern.length) {
      //go to next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // wrong, do again
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

console.log(randomChosenColour);
console.log(gamePattern);
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  //add class pressed
  $("#" + currentColor).addClass("pressed");
  //remove class pressed after 1 second
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//reset every value and start over
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
