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

$('button').click(function(){
	$('li:last-child').css('background-color', 'yellow');
});

$('h3').click(function(){
	$(this).next().css('font-weight', 'bold');
});

$('li').click(function(){
	$(this).parent().css('color', 'blue');
});