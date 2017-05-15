//1) Create default score values:

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

//This array holds the letters A-Z that the computer will randomly choose from.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//2) User presses a letter key (use onkeyup)
//Grabs user's keystrokes
//Might need a line if they press something else 
//that creates an alert
document.onkeyup = function(e) {
	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

//3) Computer "picks" a letter
	var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
	
	console.log(computerGuess);

	if (userGuess===computerGuess) {
		wins++ && guessesLeft--;
		//for testing; take out after successfully built
		alert("wins: " + wins);
	}
	if (userGuess!==computerGuess) {
		losses++ && guessesLeft--;
		//for testing; take out after successfully built
		alert("losses: " + losses);
	} else {
		alert("Oops! You didn't type a letter. Wanna try that again?");
	}


	
}


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


