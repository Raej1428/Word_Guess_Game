//variables
var words = ["SIMBA", "MICKEY", "GOOFY", "WOODY", "ELSA", "BAYMAX", "GONZO"]

//empty variables 
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//counting variables
var wins = 0;
var losses = 0;
var guessesRemaining = 13;

//FUNCTIONS
function Game() {
    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");

    }
    //console logging 
    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}

//Bonus Homework testing
//variables for audio function


function song() {
    var Simba = document.getElementById("Simba");
    var Mickey = document.getElementById("Mickey");
    var Goofy = document.getElementById("Goofy");
    var Woody = document.getElementById("Woody");
    var Elsa = document.getElementById("Elsa");
    var Baymax = document.getElementById("Baymax");
    var Gonzo = document.getElementById("Gonzo");

    if (randomWord === words[0]) {
        Simba.play();
        Woody.pause();
        Elsa.pause();
        Baymax.pause();
        Gonzo.pause();
        Goofy.pause();
        Mickey.pause();
        document.getElementById("image").src = "./assets/simba.png";
    }

    else if (randomWord === words[1]) {
        Mickey.play();
        Woody.pause();
        Elsa.pause();
        Baymax.pause();
        Gonzo.pause();
        Goofy.pause();
        Simba.pause();
        document.getElementById("image").src = "./assets/mickey.jpg";
    }

    else if (randomWord === words[2]) {
        Goofy.play();
        Woody.pause();
        Elsa.pause();
        Baymax.pause();
        Gonzo.pause();
        Mickey.pause();
        Simba.pause();
        document.getElementById("image").src = "./assets/goofy.png";
    }

    else if (randomWord === words[3]) {
        Woody.play();
        Elsa.pause();
        Baymax.pause();
        Gonzo.pause();
        Goofy.pause();
        Mickey.pause();
        Simba.pause();
        document.getElementById("image").src = "./assets/woody.png";
    }

    else if (randomWord === words[4]) {
        Elsa.play();
        Baymax.pause();
        Gonzo.pause();
        Goofy.pause();
        Mickey.pause();
        Simba.pause();
        Woody.pause();
        document.getElementById("image").src = "./assets/elsa.png";
    }

    else if (randomWord === words[5]) {
        Baymax.play();
        Gonzo.pause();
        Goofy.pause();
        Mickey.pause();
        Simba.pause();
        Woody.pause();
        Elsa.pause();
        document.getElementById("image").src = "./assets/baymax.png";
    }

    else if (randomWord === words[6]) {
        Gonzo.play();
        Elsa.pause();
        Baymax.pause();
        Goofy.pause();
        Mickey.pause();
        Simba.pause();
        Woody.pause();
        document.getElementById("image").src = "./assets/gonzo.png";
    }

};

//Check Function to see if won
function checkLetters(letter) {
    var letterInWord = "";
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
                letterInWord = false;
            }

        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)
    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        song()
        reset()
        //display wins on screen
        alert("YOU WON!!!")
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./images/try-again.png"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

//RESET FUNCTION
function reset() {
    guessesRemaining = 13;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

Game();

//check for keyup, and convert to uppercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toUpperCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");

}





