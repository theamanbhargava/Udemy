/**
 * Created by AmanB on 05-05-2017.
 */
//Check off todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

//click on X to delete

$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
	if(event.which === 13){
		var newText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + newText + "</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});