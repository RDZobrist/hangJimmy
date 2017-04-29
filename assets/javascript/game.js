var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// collection of words to be guessed by player\\\
var wordBank = ["homerun", "baseball", "football", "soccer", "basketball", "balk", "bunt", "sacrifice", "goal", "hockey", "birdie", "golf"];
// function that generates random word to be guessed by player\\\
var wordInQuestion = wordBank[Math.floor(Math.random() * wordBank.length)];
var gameOver = true;
var gameLetters = [];
var offLimitLetters = [];
var wins = 0;
var guessesLeft = 6;



// checking to see if user guessed all letters correctly \\
function didUserWin() {
    for (var i = 0; i < gameLetters.length; i++) {
        if (gameLetters[i] === "_") {
            return false; // User still has letters to guess \\
        }
    }
    return true; // All letters have been guessed \\
}



for (var i = 0; i < wordInQuestion.length; i++) {
    gameLetters.push("_");

}



// image swap function in coorrelation with user incorrect guesses \\
function killingJimmy() {
    document.getElementById("fateofJimmy").src = "assets/images/hangmanImg" + guessesLeft + ".png";
}

// Resets game by refreshing page
function resetGame() {
    window.location.reload();
}
// appends a space in between every character \\
function spacedOut(arr) {
    var result = "";

    for (var i = 0; i < arr.length; i++) {
        result += arr[i];

        if (i != arr.length - 1) {
            result += " ";
        }
    }

    return result;
}

// displaying the word player will guess, undercores on screen till user chooses correctly \\
function frontAndcenter() {
    document.getElementById("stageWord").innerHTML = "Your Word: " + spacedOut(gameLetters);

}
// displaying letters already guessed incorrectly \\
function eightysixdLetters() {
    document.getElementById("offLimitLetters").innerHTML = "Letter Cemetary: " + spacedOut(offLimitLetters);
}
// //logic of gameplay \\\


    alert("Go ahead and take your first guess to begin!");
    document.onkeyup = function(key) {
// Checking to see if user has already won without leaving the app \\
if((gameOver === true) && (wins > 0)){
document.getElementById("results").innerHTML = "Wins: " + wins;
}       else //// captures user guess \\\\
        {
            console.log(wordInQuestion);
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
            if (alphabet.indexOf(userGuess) >= 0) {
                gameOver = false;
                

            } else if (alphabet.indexOf(userGuess) === -1) {
                alert("please press a letter!"); 

            }if(gameOver === false){
    if ((gameOver === true) && (wins > 0)) {
        document.getElementById("results").innerHTML = "Wins: " + wins;
    } else //// captures user guess \\\\
    {
        console.log(wordInQuestion);
        
        for (var i = 0; i < wordInQuestion.length; i++) {
            if (wordInQuestion.charAt(i) === userGuess) {
                gameLetters[i] = String(userGuess);
            }
        }
        frontAndcenter();

        // check to see if the user has guessed all the letters correctly \\
        if (didUserWin()) {
            document.getElementById("results").innerHTML = "Congratulations! You win!";
            resetGame();
            wins++;
        } else {
            if (offLimitLetters.indexOf(userGuess) === -1) {
                if (gameLetters.indexOf(userGuess) === -1) {


                 guessesLeft--;
                  killingJimmy();


                    // Add the guessed letter to the usedLetters array
                    offLimitLetters.push(userGuess);
                    eightysixdLetters();
                }
            }


            // Check if player lost
            if (guessesLeft === 0) {
                // Player loses
                document.getElementById("message").innerHTML = "You Lose!";
   
                appRunning = false;

               
            }
        }


    }
}
        }};