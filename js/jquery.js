"use strict";

console.log("test");

var userValue = '';



$('body').keyup(function(event) {
	console.log(event.key);
	userValue += event.key;
	if(userValue === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter"){
		$('h1').html("S U N L I G H T").css('color', 'white');
		$('body').css('background-image', 'url(../img/msg-wallpaper.png)').css('background-size', 'cover');
		$('#playMe').html('<audio autoplay><source src="../audio/Mgs4_Snake_sunlight!!.mp3" type="audio/mpeg"></audio>');
	}
});

