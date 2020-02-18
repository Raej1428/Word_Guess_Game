//variables
var words = ["Simba", "Mickey", "Goofy", "Woody", "Elsa", "Baymax", "Gonzo"]

//empty variables 
var randomWord = [];
var currentWord = [];
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

//counting variables
var wins = 0;
var losses = 0;
var guessesRemaining = 13;

//FUNCTIONS

//GAME START 

function Game() {
    //computer generates random word from words array
    var randomWord = words[Math.floor(Math.random() * words.length)];

    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split(" ");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;

    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_ ");
    

    // //not sure if I needed this line but it kept giving me errors so its commented out to troubleshoot.
    // document.getElementById("currentWord").innerHTML = blanksAndCorrect.join("  ");

    //testing in case it doesn't work
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


function audio() {
    //Simba Audio & Image
    //---------------------------
    if (randomWord === words[0]) {
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.play();
        document.getElementById("image").src = "./assets/simba.png";
    }
    //mickey Audio & Image
    //---------------------------
    else if (randomWord === words[1]) {
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        simba.pause();
        mickey.play();
        document.getElementById("image").src = "./assets/mickey.jpg";
    }
    //goofy Audio & Image
    //---------------------------
    else if (randomWord === words[2]) {
        woody.pause();
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        mickey.pause();
        simba.pause();
        goofy.play();
        document.getElementById("image").src = "./assets/goofy.png";
    }
    //woody Audio & Image
    //---------------------------
    else if (randomWord === words[3]) {
        elsa.pause();
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.play();
        document.getElementById("image").src = "./assets/woody.png";
    }
    //baymax Audio & Image
    //---------------------------
    else if (randomWord === words[4]) {
        baymax.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        elsa.play();
        document.getElementById("image").src = "./assets/baymax.png";
    }
    //elsa Audio & Image
    //---------------------------
    else if (randomWord === words[5]) {
        elsa.pause();
        gonzo.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        baymax.play();
        document.getElementById("image").src = "./assets/elsa.png";
    }
    //gonzo Audio & Image
    //---------------------------
    else if (randomWord === words[6]) {
        elsa.pause();
        baymax.pause();
        goofy.pause();
        mickey.pause();
        simba.pause();
        woody.pause();
        gonzo.play();
        document.getElementById("image").src = "./assets/gonzo.png";
    }
};

//Check letters function
function checkLetters(letter) {
    var letterInWord = false;
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

//RESET FUNCTION
function reset() {
    guessesRemaining = 13;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}

//Check Function to see if won
function checkLetters(letter) {
    var letterInWord = false;
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

//check for keyup, and convert to uppercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toUpperCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}
}
//EXCUTING THE CODE
Game()









