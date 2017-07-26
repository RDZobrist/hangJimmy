// GLOBAL VARIABLES 
// =========================================
// Arrays and VAriables for holding data

var wordOptions = ["homerun", "baseball", "football", "soccer", "basketball", "balk", "bunt", "sacrifice", "goal", "hockey", "birdie", "golf"];

var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];


// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 8;
// FUNCTIONS
// ===========================================
function startGame() {

 selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];

     lettersinWord = selectedWord.split("");

     // setting the number of letters in selectedWord to variable
     numBlanks = lettersinWord.length;



     // Populate blanks and sucesses with right number of blanks 
     for (var i = 0; i < numBlanks; i++) {
          blanksAndSuccesses.push("_");
          
     }
     

     // Change HTML to reflect round conditions 
     document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
     document.getElementById("numGuesses").innerHTML = guessesLeft;
     document.getElementById('winCounter').innerHTML = winCount;
     document.getElementById("lossCounter").innerHTML = lossCount;

     // Testing Debugging
     console.log(selectedWord);
     console.log(lettersinWord);
     console.log(numBlanks);
     console.log(blanksAndSuccesses);
     console.log(guessesLeft);
}


function checkLetter(letter) {
    
     // check if letter exists
     var isLetterinWord = false;

     for (var i = 0; i < numBlanks; i++) {
         
          if (selectedWord[i] == letter) {
               isLetterinWord = true;
               roundComplete();

          }
     }

     // Check where in word letter exists, then populate blanksandSuccessess arr
     if (isLetterinWord) {

          for (var i = 0; i < numBlanks; i++) {


               if (selectedWord[i] == letter) {

                blanksAndSuccesses[i] = letter;
                // update Html with word to guess and guesses left 
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(" ");
                 document.getElementById("numGuesses").innerHTml = guessesLeft;




               }
          }
     }
     // Letter wasnt found
     else {
         
          wrongLetters.push(letter);
          guessesLeft--;
          document.getElementById('wrongGuesses').innerHTML = wrongLetters;
          document.getElementById('numGuesses').innerHTML = guessesLeft;

     }

     // Testing and Debugging
     console.log(blanksAndSuccesses);
};

function roundComplete() {
     console.log("Win Count: " + winCount + " | lossCount: " + lossCount + "| Guesses Left:|" + guessesLeft)

     // Check if user won 
     if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
          winCount++;
          resetGame();
          alert("you Won!");

          // update the win count in the html
          document.getElementById('winCounter').innerHtml = winCount;
     } else if (guessesLeft == 0) {
          lossCount++;
          resetGame();
          alert("You lost!");

          // update loss count in html
          document.getElementById('lossCounter').innerHtml = lossCount;
          document.getElementById('winCounter').innerHtml = winCount;

     }


}


document.onkeyup = function(event) {

   
     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetter(letterGuessed);
     roundComplete();

     // testing and debugging
     console.log(letterGuessed + " " + guessesLeft);


}
function resetGame(){

     // Reset
     guessesLeft = 8;
     wrongLetters = [];
     blanksAndSuccesses = [];
     wrongLetters=[];
     startGame();

}

// MAIN PROCESS
// ========================================

// Inititalize code
startGame();

