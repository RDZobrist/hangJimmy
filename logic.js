
// / GLOBAL VARIABLES 
// =========================================
// Arrays and VAriables for holding data
var wordOptions = [];
var selectedWord = [];
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
// ===========================================

function startGame() {
     selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.legth)];
     lettersinWord = selectedWord.split("");
     numBlanks = lettersinWord.length;

     // Reset
     guessesLeft = 0;
     wrongLetters = [];
     blanksAndSuccesses = [];
     // Populate blanks and sucesses with right number of blanks 
     for (var i = 0; i < numBlanks; i++) {
          blanksAndSuccesses.push("_");
     }
     // Change HTML to reflect round conditions 
     document.getElementById('wordToGuess').innerHtml = blanksAndSuccesses.join(" ");
     document.getElementById("numGuesses").innerHtml = guessesLeft;
     document.getElementById('winCounter').innerHtml = winCount;
     document.getElementById("lossCounter").innerHtml = lossCount;

     // Testing Debugging
     console.log(selectedWord);
     console.log(lettersinWord);
     console.log(numBlanks);
     console.log(blanksAndSuccesses);
}

function checkLetter(letter){
	// check if letter exists
	var isLetterinWord = false;

	for (var i = 0; i<numBlanks;i++){
		if(selectedWord[i]==letter){
			isLetterinWord = true;
		}
	}

	// Check where in word letter exists, then populate blanksandSuccessess arr
	if(isLetterinWord){
		for (var i = 0; i<numBlanks;i++){
			if(selectedWord[i]==letter){
				blanksAndSuccesses[i]=letter;

			}
		}
	}
	// Letter wasnt found
	else {
		wrongLetters.push(letter);
		numGuesses--;

	}

	// Testing and Debugging
	console.log(blanksAndSuccesses);

	function roundComplete(){
		console.log("Win Count: "+ winCount + " | lossCount: " + lossCount +"| Guesses Left:|" + guessesLeft)
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	// Check if user won


	};
	
// MAIN PROCESS
// ========================================

// Inititalize code
startGame();

}
