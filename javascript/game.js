window.onload = function () {

    var letters = "abcdefghijklmnopqrstuvwxyz".split(" ");
    var space = [];
    var guess = []; //user guess
    var wrongLetters = []; //incorrectly guessed letters
    var guessesLeft = 13; //holds users guesses
    var wordList = ["Simba", "Mickey", "Goofy", "Woody", "Stitch"]; //FILL LIST LATER!!
    //randomly chooses a word from wordList
    var word = wordList[Math.floor(Math.random() * wordList.length)];
    var space = document.getElementById("space");
    var wrongLetters = document.getElementById("wrongLetters");
    var guessesLeft = document.getElementById("You have " + guessesLeft);
    

    function start() {
        for (i = 0; i < word.length; i++) {
            letters[i] = "__";
            guessesLeft = 13;
            guessesLeft--;
        }

        document.getElementById("space").innerHTML = letters.join(" ");
        document.getElementById("guessesLeft").innerHTML = "You have " + guessesLeft;

    };

    document.onkeyup = function (event) {
        letters = event.key.toUpperCase(guess);
        for (i = 0; i < word.length; i++) {
            if (letters === word[i]) {
                letters = guess;
                document.getElementById("guess").innerHTML = guess.replace([i]);

            } else {
                guess = wrongLetters
                document.getElementById("wrongLetters").innerHTML = wrongLetters.join(", ");
            }

        }
        
    };

    start();
}






