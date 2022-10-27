const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

$(".btn").on("click", function () {
  const userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
