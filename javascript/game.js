var words = ['Simba', 'Mickey', 'Goofy"', 'Woody', 'Stitch'];;
var allowedGuesses=13;
var correctGuesses=0;
var wrongGuesses=0;
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var getRandomWord = words[Math.floor(Math.random() * words.length)];
var getRandomWordElement = document.getElementById('getRandomWord');

function setupGame() {
    allowedGuesses = [];
    wrongGuesses = [];
    correctGuesses = [];
    // initializes correctGuesses array with underscores
    for (var i = 0; i < getRandomWord.length; i++) {
        correctGuesses.push('_');
    }
    getRandomWordElement.innerHTML=correctGuesses.join(' ');
    letterCountElement.innerHTML=allowedGuesses;
};

function updateGuesses(_letter) {
    allowedGuesses--; //decrements guesses left
    letterCountElement.innerHTML=allowedGuesses;

    if (getRandomWord.indexOf(_letter) === -1) {//if letter is not in the word
        wrongGuesses.push(_letter); //updates letters guessed
        lettersGuessedElement.innerHTML=wrongGuesses.join(', ');
    } else {//when letter is in the word replace underscore with the letter
        for (var i = 0; i < getRandomWord.length; i++) {
            if (getRandomWord[i] === _letter) {
                correctGuesses[i]=(_letter);
            }
        }
        getRandomWordElement.innerHTML=correctGuesses.join(' ');
    }
};

function checkWin() {
    if (correctGuesses.indexOf(' ') === -1) {
        alert('You WIN!!!');
    } else if (allowedGuesses===0) {
        alert('You LOSE!!!');
    }
};

document.onkeyup = function (event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    updateGuesses(lettersGuessed);
    checkWin();
};

document.onload = function () {
    setupGame();
};

