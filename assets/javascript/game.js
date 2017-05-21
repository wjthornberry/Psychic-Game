// Needs work: 
// Update the computer's guess, as it's only guessing once now
// If you hit the wrong key, it still counts as a loss, but only an alert should pop up


// Declare variables and set default score values:

var wins = 1;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

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

var updateGuessedLetters = function() {
	// Display user's guesses.
	document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters;

};

// Function to reset game
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetter = [];

	updateGuessesLeft();
	updateGuessedLetters();
};

// When the user presses a key, this grabs his or her keystrokes
// Must create an alert if something else is pressed.

document.onkeyup = function() {
	
	// Takes user's guess and ensures it is converted to lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		guessedLetters.push(userGuess);

	// if/else loops to compare user's input to computer's "guess"
	if (userGuess===computerGuess) {
		wins++ && guessesLeft--;
		//for testing; take out after successfully built
		// alert("wins: " + wins);
		document.querySelector('#wins').innerHTML = "Wins: " + wins;
		alert("Whoah! You're right! How'd you do that? You ARE psychic!");	
		reset();
	}

	else if (userGuess!==computerGuess) {
		guessesLeft--;
		//for testing; take out after successfully built
		document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
		alert("guessesLeft: " + guessesLeft);

	} else if (guessesLeft===0) {
		// User loses. HTML is updated to reflect the loss. 
		// losses++;
		document.querySelector('#losses').innerHTML = "Losses: " + losses;
		alert("Wait – I thought you said you were a psychic? It's okay – you can try again.");
		// Call the reset
		reset();

	} else {
		// When user presses any key besides a letter, we alert him or her
		alert("Oops! That wasn't a letter. Wanna try that again?");
	}
};


//If user presses a letter (e.g., 'h') that the computer was
//not "thinking" of:
//"Your Guesses so far" adds the character 'h'
//"Guesses left" decreases by 1 (to 8)
//console.log everything during testing ex: alert("wins: " + wins);
//but take out after testing

//When the value of "Guesses Left" = 0:
//the value for "Losses" increases by 1 losses++ in loop
//the value for "Guesses Left" returns to default of 9
//the game restarts - without refreshing the page 
//and the game "chooses" a new letter

//When the user presses a letter (e.g., 'c') that the computer was
//"thinking" of:
//Wins: value increases by 1 wins++ in loop
//Game starts over (without refreshing page)
//Computer chooses a new letter

	//push to add user's guesses to an empty variable, guessedLetters

     // For-Loop that will repeat three times.
      // for (var i = 1; i < 4; i++) {

      //   // Each time it asks the user for their #1, #2, or #3 TV show.
      //   tvShow = prompt("What's your #" + i + " favorite TV show?");

      //   // It then takes the user's response and "pushes" (or adds) the variable to the end of the favTVshows array.
      //   favTVshows.push(tvShow);
      // }



