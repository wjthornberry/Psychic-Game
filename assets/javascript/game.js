// Needs work: 
// Update the computer's guess, as it's only guessing once now
// If you hit the wrong key, it still counts as a loss, but only an alert should pop up


// Set default score and guess values:

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// This array holds the letters A-Z that the computer will randomly choose from.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Computer "picks" a letter randomly.
var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	console.log(computerGuess);

// User has 9 guesses.
var updateGuessesLeft = function() {
	// Grab HTML elements to update guessesLeft.
	document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
	// Computer repeatedly guesses
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessedLetters = function() {
	// Display user's guesses.
	document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters;

};

// Reset function
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessedLetters();
	updateLetterToGuess();
}

updateLetterToGuess();
// updateGuessesLeft;

// Displays image of female psychic when user wins. What's the best way 
// to add this to the middle of the page? CSS?
function displayWinPsychic() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/psychic.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Female Psychic");
    document.body.appendChild(x);
}

// Displays image of Zoltar when user loses. What's the best way
// to add this to the middle of the page? CSS?
function displayLosePsychic() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "assets/images/zoltar.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "Zoltar");
    document.body.appendChild(x);
}

// When the user presses a key, this grabs his or her keystrokes
// How do I create an alert to notify the user that he or she hit a non-alpha key?

document.onkeyup = function() {
		guessesLeft--;
	// Takes user's guess and ensures it is converted to lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		// Testing -- remove
		console.log(userGuess);

	guessedLetters.push(userGuess);
	updateGuessedLetters();
	updateGuessesLeft();

		if (guessesLeft > 0){
			// User guesses correctly
            if (userGuess==computerGuess){
                wins++, reset();
                alert("Whoah! You're right! How'd you do that? You ARE psychic!"); 
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                displayWinPsychic();
                       
        } 

        } else if (guessesLeft == 0){
            // Lose and update the loss 
            losses++, reset();
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you lost. The letter was " + letterToGuess);
            displayLosePsychic();
        }    
};