/**
 * Created by AmanB on 30-04-2017.
 */
var btn = document.querySelector("button");
/*
var isPurple = false;
	btn.addEventListener("click", function () {
	if(!isPurple){
		document.body.style.background ="purple";
		isPurple=true;
	}
	else{
		document.body.style.background = "white";
		isPurple = false;
	}
});
*/

btn.addEventListener("click", function () {
	document.body.classList.toggle("purple");
});

