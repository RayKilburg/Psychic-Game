///////////////////
var guess = 0;
var guessAmount = 9;
var wins = 0;
var losses = 0;
var restart = 0;
var test = 0;
var inputs = [];
var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var userGuess = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess;

//reset function
function reset() {
  guessAmount = 9;
  inputs = [];
  computerGuess =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerGuess);
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

  //r  LOGIC
  if (userGuess === computerGuess) {
    console.log("youwin");
    wins++;
    reset();
  } else {
    guessAmount--;
    inputs.push(userGuess);
  }

  //loss
  if (guessAmount === 0) {
    losses++;
    reset();
  }
  document.getElementById("userGuess").textContent = inputs.join(", ");
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("guessAmount").textContent = guessAmount;
};
reset();
