"use strict";

// $(document).ready(function(){
// 	alert('ready!');
// });

$('h1').click(function(){
	$('dd').addClass('invisibles');
});

$('dt').click(function() {
	$(this).next().toggleClass('invisibles');
});

$('dd').hover(function(){
	$(this).toggleClass('highlight');
})

$('button').click(function(event){
	event.preventDefault();
	$('ul').each(function(){ //Larry's review
		$(this).children().last().css('background-color','yellow'); //Larry's review
	}); //Larry's review
	// $('li:last-child').toggleClass('yellow-highlight');
});

$('h3').click(function(){
	$(this).next().css('font-weight', 'bold');
});

$('li').click(function(){
	$(this).parent().children().first().css('color','blue');
});