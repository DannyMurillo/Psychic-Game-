// variables, the object letters to choose from 
var  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// start with a score of 0 wins, 0 loses, 9 guesses, letters guessed
var wins = 0;
var loses = 0;
var guesses = 9;
var guessedLetters = [];
var cpuChoice; 

// calls the functions 
reset();
display();


// calling the functions when the program starts and the user pressing a key
document.onkeyup = function(event) {
    var userGuess = event.key;
    guessedLetters.push(userGuess)
    if (userGuess === cpuChoice){
        win();
    }
    else {
        wrong(userGuess);
    }
    if (guesses - 1 === 0) { 
        lose();
    }
    display();

}

//giving ids that can be used with the html to display the scores kept by the program
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
// functions that are sued to determine what happens to the score after each guess 
function win() {
    wins++;
    reset();
}
//what happens when you lose the game 
function lose() {
    loses++;
    reset();
}
//what happens when the guess is wrong
function wrong(guess) {
    guesses--;
    guessedLetters.push(guess)
}
// resets the game when the user has won/lost the game
function reset() {
    guesses = 9;
    guessedLetters = [];
    cpuChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log("Letter to guess:" + cpuChoice);
}

//im guessing that it wont start because im not correctly setting up how the cpu will choose the random letter. Im confused with that section because i have an empty variable set up, and from my understanding the last couple lines of code here are there to set it up so that the cpu will choose a random letter. 

// its saying that my files are not found in the console

// it is not loading my resources and doesnt show in my console, i dont know what else to do for it 

