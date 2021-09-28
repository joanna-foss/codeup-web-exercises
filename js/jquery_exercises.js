"use strict"

$(document).ready(function(){
	alert("Done loading!");
});

// $('*').css('border', '2px dotted pink').css('padding', '5px');

var navItem3Test = $('#nav-item-3').html();
alert(navItem3Test);

var header = $('#header1').html();
alert(header);

// $('.codeup').css('border', '1px solid red');

$('li').css('font-size','20px');

$('h1, p, li').css('background-color', 'pink');

var h1alerts = $('#header1').html() + " & " + $('#header2').html();
alert(h1alerts);