
$(function(){
	$("span:odd").css('color','red');
/*change color*/
	var clas = $('p');
	clas.each(function(index, element) { 
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		$(element).append(button); 
	});
/*add new element*/
	$("button").on(function() {
	 	alert($(this).attr("data-tmp")); 
	});
/*add event handler*/
});





 
	