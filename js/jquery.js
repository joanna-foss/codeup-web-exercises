"use strict";

console.log("test");

var userValue = '';



$('body').keyup(function(event) {
	console.log(event.key);
	userValue += event.key;
	if(userValue.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter")){
		$('#header').html('MGS4: The Solar Gun').css('padding', '.5em').css('color', 'black').css('font-size', '5em').css('text-shadow', '2px 2px beige');
		$('body').css('background-image', 'url(../img/msg-wallpaper.png)').css('background-size', 'cover').css('background-repeat', 'no-repeat').css('background-attachment', 'fixed').css('background-position', 'center').attr('class', 'animate__animated animate__fadeIn');
		document.getElementById('hasTheGoodStuff').removeAttribute('class');
		$('p').attr('class', 'd-none');
		$('#playMe').html('<audio autoplay><source src="../audio/Mgs4_Snake_sunlight!!.mp3" type="audio/mpeg"></audio>');
	}
});

