$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	//create click event for submit button
	$("#Submit").click(function(){
		var guess = $("input[name=Box]").val();
		$("#response").append("You guessed: " + guess);
	})


	//create click event for clear button


});
