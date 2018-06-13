///////////////////
var guess = 0;
var guessAmount = 8;
var wins = 0;
var losses = 0;
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 // Randomly chooses a choice from the options array. This is the Computer's guess.
 var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
 console.log(computerGuess)

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;
        document.getElementById("userGuess").textContent = userGuess;
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
   

      //r  LOGIC
      if (userGuess === computerGuess ) {
        wins++; 
        console.log("iyhj")
      } else {
        losses++;
      }
     }