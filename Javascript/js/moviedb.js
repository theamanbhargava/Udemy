/**
 * Created by AmanB on 20-04-2017.
 */
var movies = [
	{
		name: "Kaho na Pyaar Hai",
		rating: "5",
		hasWatched: false
	},
	{
		name: "Mad Max",
		rating: "4",
		hasWatched: false
	},
	{
		name: "Makdi",
		rating: "3",
		hasWatched: true
	}
];

movies.forEach(function (movie) {
	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	}
	else {
		result += "not watched ";
	}
	result += "\"" + movie.name + "\" - ";
	result += movie.rating + " stars";
	return result;
}