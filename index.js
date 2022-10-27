const buttonColors = ["red", "blue", "green", "yellow"];
let randomNumber;
let randomChosenColor;
let gamePattern = [];

function nextSequence() {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
