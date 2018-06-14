///////////////////
var guess = 0;
var guessAmount = 9;
var wins = 0;
var losses = 0;
var restart = 0;
var inputs = []
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

function counter() {
  inputs.push("Kiwi");
  document.getElementById("demo").innerHTML = inputs;
}

function reset(){
  guessAmount = 9;
  inputs = [];
  computerGuess= computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerGuess);
}


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

  // document.getElementById("reset").textContent = reset;

  //r  LOGIC
  if (userGuess === computerGuess) {
    console.log("youwin")
    wins++;
    reset()
  } else {
    guessAmount--;
    inputs.push(userGuess);
  }
  // //reset
  // if (guessAmount === 0 || userGuess === computerGuess ){
  //   wins = 0;
  //  //losses = 0;
  //   guessAmount = 9;
  //   computerChoice[Math.floor(Math.random() * computerChoice.length)];
  // }
  
  //loss
  if (guessAmount === 0){
    losses ++;
    reset()
  }
  document.getElementById("userGuess").textContent = inputs.join(", ")
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("guessAmount").textContent = guessAmount;
};
reset()

//Restart the Game once after the player wins
//Restart the Game when player runs out of guesses
//show what letters the user already guessed
//have userGuess repeat

//Restart() return wins 0; return losses 0; return guessAmount 9; change computerGuess;
//if guessAmount 0 Restart()

//loss ++ when guessamount = 0;
//wins only if user guesses right // losses only when the player runs out of guesses
