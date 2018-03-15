// variables
// ================================================================================================
// the object letters to choose from 
var  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// start with a score of 0 wins, 0 loses, 9 guesses, letters guessed
var wins = 0;
var loses = 0;
var guesses = 9;
var guessedLetters = [];
var cpuChoice; 


reset();
display();

document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess)
    if (userGuess === cpuChoice){
        wins();
    }
    else if (guesses - 1 === 0) {
        guesses();
    }
    if (guesses === 0){
        lose();
    }
    display();

}

function display () {
    var winsP = document.getElementById("wins");
    var losesP = document.getElementById("loses");
    var guesses = document.getElementById("guesses");
    var letterGuessed = document.getElementById("guessed");
    winsP.innerHTML = wins;
    loses.innerHTML = loses;
    guesses.innerHTML = guesses;
    letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
    wins++;
    reset();
}

function lose() {
    loses++;
    reset();
}

function wrong(guess) {
    guesses--;
    guessedLetters.push(guess)
}

function reset() {
    guesses = 9;
    guessedLetters = [];
    cpuChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess:" + cpuChoice);
}



