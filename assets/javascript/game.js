//Default scores:
//Wins: 0
//Losses: 0
//Guesses Left: 9
//Your Guesses so far:

var Wins = 0
var Losses = 0
var guessesLeft = 9
var guessesSoFar = 

document.getElementById("fname").onkeyup = function() {userKey()};
function userKey() {
    var guess = document.getElementById("fname");

//User presses a LETTER key (onkeyup)
//Will need a line if they press something else 
//that creates an alert that notifies the user

//If user presses a letter (e.g., 'h') that the computer was
//not "thinking" of:
//"Your Guesses so far" adds the character 'h'
//"Guesses left" decreases by 1 (to 8)

//When the value of "Guesses Left" = 0:
//the value for "Losses" increases by 1
//the value for "Guesses Left" returns to default of 9
//the game restarts - without refreshing the page 
//and the game "chooses" a new letter

//When the user presses a letter (e.g., 'c') that the computer was
//"thinking" of:
//Wins: value increases by 1
//Game starts over (without refreshing page)
//Computer chooses a new letter


