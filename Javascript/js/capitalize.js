/**
 * Created by AmanB on 16-04-2017.
 */
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var word = prompt("Enter word to be capitalized");
capitalize(word);