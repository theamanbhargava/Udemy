/**
 * Created by AmanB on 30-04-2017.
 */
var p1 = document.querySelector("#p1"); //player 1
var p2 = document.querySelector("#p2"); /*player 2*/
var btn1 = document.getElementById("btn1"); /*increment player one*/
var btn2 = document.getElementById("btn2"); //increment player two
var nullify = document.getElementById("reset"); //reset score
var input = document.querySelector("input");  //textfield
var p1score=0, p2score=0; //scores
var limit = parseInt(prompt("Enter number to play until")); //limit until game is to be played
var gameOver = false;
var limitTag = document.querySelector("#limit"); //select limit id on html

limitTag.textContent = limit;

btn1.addEventListener("click", function () {
	if (p1score<limit && !gameOver) {
		p1score += 1;
		p1.textContent = p1score;
	}
	if(p1score===limit){
		gameOver = true;
		p1.classList.add("winner");
	}
});

btn2.addEventListener("click", function () {
	if (p2score<limit && !gameOver) {
		p2score += 1;
		p2.textContent = p2score;
	}
	if(p2score===limit){
		gameOver = true;
		p2.classList.add("winner");
	}
});
nullify.addEventListener("click", function () {
	reset();
});

input.addEventListener("change", function () {
	limitTag.textContent= input.value;
	limit = parseInt(input.value);
	reset();
});

function reset() {
	gameOver = false;
	p1score=0;
	p2score=0;
	p1.textContent = p1score;
	p2.textContent = p1score;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
}