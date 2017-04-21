/**
 * Created by AmanB on 19-04-2017.
 */
var todos = [];

var input = prompt("What would you like to do?");

function listTodos() {
	console.log("**********");
	todos.forEach(function (todo, i) {
		console.log(i + " : " + todo);
	});
	console.log("**********");
}


function deleteItem() {
	//ask for index of To-do
	var index = prompt("Enter index of todo to be deleted");
	var deleted = todos.splice(index, 1);
	prompt("Item " + deleted + " is now deleted");
}

while (input !== "quit") {
	if (input === "list") {
		listTodos();
	}
	else if (input === "new") {
		//ask for new input
		var newTodo = prompt("Enter new Todo");
		todos.push(newTodo);
	}
	else if (input === "delete") {
		deleteItem();
	}
	input = prompt("What would you like to do?");
}