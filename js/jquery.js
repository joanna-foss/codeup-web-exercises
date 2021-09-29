"use strict";

console.log("test");

var userValue = '';



$('body').keyup(function(event) {
	console.log(event.key);
	userValue += event.key;
	if(userValue.includes("ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter")){
		$('#header').html('<h1>MGS: The Solar Gun</h1>').css('padding', '.5em').css('color', 'black').css('text-shadow', '2px 2px red');
		$('body').css('background-image', 'url(../img/msg-wallpaper.png)').css('background-size', 'cover');
		$('#playMe').html('<audio autoplay><source src="../audio/Mgs4_Snake_sunlight!!.mp3" type="audio/mpeg"></audio>');
		$('#coolInfo').html('The Solar Gun is a weapon awarded for finding the five Beauty Beast Corps statues - you are awarded them provided you defeat the Beast forms of Laughing Octopus, Raging Raven, Crying Wolf and Screaming Mantis with stun draining weapons.\n' +
			'\n' +
			'Additionally, you cannot kill any of the BB Corps\' Frog Soldiers when making your escape with Meryl Silverburgh\'s team at the hotel in Act 1 (the Frog statue appears at the start of the next area).\n' +
			'\n' +
			'Note that the criteria for the Solar Gun is different from the Big Boss emblem criteria; the Big Boss emblem allows you to use lethal weapons on the Beast form, but non-lethal weapons on the Beauties.');
		$('#coolInfo').attr('class', 'p-3').css('background-color', 'rgba(245, 245, 220, 0.5)').css('width', '35em').css('height', 'auto').css('font-size', '1em')
	}
});

