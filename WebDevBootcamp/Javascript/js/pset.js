/**
 * Created by AmanB on 16-04-2017.
 */
var x = prompt("Enter number");
var string = prompt("Enter word to convert to snake case");

function isEven(x) {
	return x % 2 === 0;
}

function factorial(i) {
	if (i > 1) {
		return i * factorial(i - 1);
	}
	else
		return 1;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/gi, '_');
	return newStr;
}

if (isEven(x)) {
	alert("Number is even");
}

var fact = factorial(x);

alert("Factorial of " + x + " is " + fact);
alert("Input string in snake case is " + kebabToSnake(string));