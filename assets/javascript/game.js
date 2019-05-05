   // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
   var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var wins = 0;
   var losses = 0;
   var userGuessesLeft = 9;
   var guesses = [];
   var directionsText = document.getElementById("directions-text");
   var computerGuess
   var userWins = document.getElementById("user-wins");
   var userLosses = document.getElementById("user-losses");
   var guessesLeft = document.getElementById("guesses-left");
   var userGuesses = document.getElementById("user-guesses");

   // This function is run whenever the user presses a key.
   document.onkeyup = function (event) {

       // Determines which key was pressed.
       var userGuess = event.key.toUpperCase();
       console.log(userGuess);

       // Randomly chooses a choice from the options array. This is the Computer's guess.

       // Alerts the key the user pressed (userGuess).
       if ((userGuess === computerGuess)) {
           wins++;
           reset();
       } else {
           if ((userGuessesLeft > 1)) {
               userGuessesLeft--
               guesses.push(userGuess)
           } else {
               userGuessesLeft--
               losses++;
               reset();
           };

       }
       
       // <!-- //wins increase win counter when a win-->
       // <!-- loses increase lose counter when a lose -->
       // <!-- Guesses left -->
       // <!-- Guesses so far -->
       // directionsText.textContent = "";

       guessesLeft.innerText = ("Guesses left: " + userGuessesLeft);
       userGuesses.textContent = ("Guesses so far: " + guesses.join(", "));


       function reset() {
           
           computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
           guesses=[];
           userGuessesLeft = 9;
           
           console.log("The computer guess is: " + computerGuess);
           userWins.textContent = ("Wins: " + wins);
           userLosses.innerText = ("Losses: " + losses);
       }

       function myFunction() {
           alert("it is working!");
       }
       window.onload = myFunction;
   };