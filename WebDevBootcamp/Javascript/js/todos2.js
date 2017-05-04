/**
 * Created by AmanB on 03-05-2017.
 */
var items = document.querySelectorAll("li");

for (var i =0; i < items.length; i++){
	items[i].addEventListener("mouseover" ,function () {
		this.classList.add("selected");
	});
	items[i].addEventListener("mouseout", function () {
		this.classList.remove("selected");
	});
	items[i].addEventListener("click", function () {
		this.classList.toggle("done");
	})
}


