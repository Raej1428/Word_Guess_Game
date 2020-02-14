window.onload = function()
{

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var answer = [];
var guess = []; //user guess
var letters = []; //correctly guessed letters
var wrongLetters = []; //incorrectly guessed letters
var counter = 0; //counts correct letters
var guesses = 13; //counts users guesses

var wordList = ['Simba', 'Mickey', 'Goofy"', 'Woody', 'Stitch']; //FILL LIST LATER!!

//randomly chooses a word from wordList
var word = wordList[Math.floor(Math.random() * wordList.length)];
var guess = document.getElementById("guess");
var answer = document.getElementById("answer");
var wrongLetters = document.getElementById("wrongLetters");

//choosen word is replaced with
function start() {
    for (i = 0; i < word.length; i++) {
        letters[i] = "__";
    }
    document.getElementById("answer").innerHTML = letters.join("");
}

function checkLetter() {
    document.onkeyup = function (event) {
        guess = event.key.toUpperCase();
        var found = false; //Check for a boolean value

        for (i = 0; i < word.length; i++) {

            if (guess === word[i]) {
                letters[i] = guess;
                document.getElementById("answer").innerHTML = letters.join(" ");
                found = true;
            }
        }
        //if found return statement to return the character
        if (found) return;

        //wrong letters setup
        else (guess === word[i])
        {wrongLetters.indexOf(guess) < 1;
            wrongLetters.push(guess)};
            document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
        }
    }
start();
checkLetter();
}

