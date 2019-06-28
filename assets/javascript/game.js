    var wins = 0;
    var losses = 0;

    function game() {

    var letters=['a', 'b', 'c', 'd' , 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y', 'z'];
    var remainingGuesses = 9;
    var guessedLetters = [];


// Create variables that hold references to the places in the HTML where we want to display things.
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeft = document.getElementById("guesses-left");
    var guessedLetter = document.getElementById("guessed-letters");


document.onkeyup = function(event) {
    var userChoice = event.key.toLocaleLowerCase(); 
    var randomLetter = letters[Math.floor(Math.random()*letters.length)];


    if (userChoice === randomLetter){
            wins++;
            game();
    }
    else {
        if(remainingGuesses > 0){
            remainingGuesses--;
            guessedLetters.push(userChoice);
        }
        else{
            losses++;
            game();
    }

    }
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesLeft.textContent ="Guesses left: " + remainingGuesses;
        guessedLetter.textContent = "Letters already guessed: " + guessedLetters;

    }
}

game();
