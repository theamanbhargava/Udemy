/**
 * Created by AmanB on 19-04-2017.
 */

function printReverse(input) {
	for (var i = input.length - 1; i > -1; i--) {
		console.log(input[i]);
	}
}
printReverse(["5", "4", "8"]);

function isUniform(input) {
	var checker = input[0];
	for (var i = 0; i < input.length; i++) {
		if (input[i] !== checker)
			return false;
	}
	return true;
}

/*function isUniform(input) {
 var first = input[0];
 input.forEach(function (element) {
 if (element !== first) {
 return false;
 }
 });
 return true;
 }*/

function sumArray(input) {
	var total = 0;
	input.forEach(function (element) {
		total += element;
	});
	console.log(total);
}

function max(input) {
	var max = input[0];
	input.forEach(function (element) {
		if (element > max)
			max = element;
	});
	console.log(max);
}

console.log(isUniform(["1", "2"]));
sumArray([5, 4, 6]);
max([5, 4, 6, 10, 8, 9]);