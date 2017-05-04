document.querySelector("ul").addEventListener("click", function () {
	console.log("YOU CLICKED UL")
});

var lis = document.querySelectorAll("li");

var button = document.querySelector("button");
var para = document.getElementsByTagName("p");

button.addEventListener("click", function () {
	para.textContent = "Someone has clicked the button";
	console.log("Button is being clicked");
});

for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click", function () {
		this.style.color = "pink";
	})
}