/**
 * Created by AmanB on 16-04-2017.
 */
alert("Hello!");
//create secretNumber
var secretNumber = Number(4);
var guess;
while (guess !== secretNumber) {
	//ask user for guess
	var guess = Number(prompt("Guess a number"));
	if (guess > secretNumber) {
		alert("Guessed number is too high!");
	}
	else +
	if (guess < secretNumber) {
		alert("Guessed number is too low");
	}
}
//check if a guess is right
if (guess === secretNumber) {
	alert("You got it right!");
}
