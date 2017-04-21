/**
 * Created by AmanB on 16-04-2017.
 */
var age = Number(prompt("Enter age"));
if (age < 0) {
	alert("Error");
}
if (age === 21) {
	alert("Happy 21st Birthday!");
}
if (age % 2 === 1) {
	alert("Your age is odd!");
}

var isSquare = function (age) {
	return age >= 0 && Math.sqrt(age) % 1 === 0;
};

if (isSquare(age)) {
	alert("Perfect Square");
}