window.onload = function () {

    //var alphabet = "abcdefghijklmnopqrstuvwxyz".split(" ");
    var answer = [];
    var guess = []; //user guess
    var letters = []; //correctly guessed letters
    var wrongLetters = []; //incorrectly guessed letters
    var guessesLeft = 13; //counts users guesses
    var wordList = ["Simba", "Mickey", "Goofy", "Woody", "Stitch"]; //FILL LIST LATER!!

    //randomly chooses a word from wordList
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    var guess = document.getElementById("guess");
    var answer = document.getElementById("answer");
    var wrongLetters = document.getElementById("wrongLetters");
    var guessesLeft = document.getElementById("guesses");

    //choosen word is replaced with
    function start() {
        for (i = 0; i < word.length; i++) {
            letters[i] = "__";
        }
        document.getElementById("answer").innerHTML = letters.join(' ');
    };

    function checkLetter() {
        document.onkeyup = function (event) {
            guess = event.key.toUpperCase();

            for (j = 0; j < word.length; j++) {

                if (guess === word[j]) {
                    letters[j] = guess;
                    found = true;
                    document.getElementById("answer").innerHTML = answer.join('');
                }
                else if (guess === word[j]) {
                letters[j] = guess;
                    found = false;
                    document.getElementById("wrongLetters").innerHTML = wrongLetters.join(', ');
                }
            }
            guessesLeft--;
        };

    }

    start();
    checkLetter();
}
