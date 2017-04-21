/**
 * Created by AmanB on 16-04-2017.
 */
var answer = prompt("are we there yet?");

while (answer !== "yes" && answer !== "yeah" && answer.indexOf("yes") === -1) {
	answer = prompt("Are we there yet?");
}

alert("Yaay! We are there!");