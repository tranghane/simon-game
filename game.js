var randomChosenColour;
var gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var randomNumber = -1;
function nextSequence() {
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
}




console.log(randomChosenColour);
console.log(gamePattern);
function playSound(name) {
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}
// var audio = new Audio("sounds/wrong.mp3");
// audio.play();
// document.addEventListener('click', function() {
//     var audio = new Audio("sounds/wrong.mp3");
//     audio.play();
//   });
  