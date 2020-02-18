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
var simba = document.getElementById("Simba");
var mickey = document.getElementById("Mickey");
var goofy = document.getElementById("Goofy");
var woody = document.getElementById("Woody");
var elsa = document.getElementById("Elsa");
var baymax = document.getElementById("Baymax");
var gonzo = document.getElementById("Gonzo");

function song() {
    //Simba Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        simba.play();
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        document.getElementById("image").src = "./assets/simba.png";
    }
    //mickey Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        mickey.play();
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        simba.pause();
        document.getElementById("image").src = "./assets/mickey.jpg";
    }
    //goofy Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        goofy.play();
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        mickey.pause();
        simba.pause();
        document.getElementById("image").src = "./assets/goofy.png";
    }
    //woody Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        woody.play();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        document.getElementById("image").src = "./assets/woody.png";
    }
    //baymax Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        elsa.play();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        document.getElementById("image").src = "./assets/baymax.png";
    }
    //elsa Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        baymax.play();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        elsa.pause();
        document.getElementById("image").src = "./assets/elsa.png";
    }
    //gonzo Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        gonzo.play();
        elsa.pause();
        baymax.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        document.getElementById("image").src = "./assets/gonzo.png";
    }

}
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

//RESET FUNCTION
function reset() {
    guessesRemaining = 13;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}



