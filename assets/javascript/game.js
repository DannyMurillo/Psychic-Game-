// variables
// ================================================================================================
// the object letters to choose from 
var  letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// start with a score of 0 wins, 0 losses, 9 guesses, letters guessed
var wins = 0;
var losses = 0;
var guesses =9;
var guessedLetters = []



//functions
// ================================================================================================
// function to start the game 
reset();
display();

function display () {
    var winsP = document.getElementById("wins");
    var losesP = document.getElementById("losses");
}


// main process
//================================================================================================
// starting the game
   

    document.onkeyup = function(event) {
        var userGuess = event.key;
        guessedLetters.push(userGuess)
        if (userGUess === cpuChoice){
            wins();
        }
        else {
            guesses();
        }
        if (guesses === 0){
            losses();
        }


    var html = "<p>Guess what letter I'm thinking of:</p>" + "<p>WIns:" + wins + "</p>" + "<p>Losses:" + losses + "</p>" + "<p>Guesses Remaining:" + guesses + "</p>" + "<p>Guessed Letters:" + guessedLetters.join(','); + "</p>"
    }
