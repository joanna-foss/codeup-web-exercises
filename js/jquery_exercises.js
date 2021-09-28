"use strict"

//JQUERY INTRO CODE
// $(document).ready(function(){
// 	alert("Done loading!");
// });
//
// $('*').css('border', '2px dotted pink').css('padding', '5px');
//
// var navItem3Test = $('#nav-item-3').html();
// alert(navItem3Test);
//
// var header = $('#header1').html();
// alert(header);
//
// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size','20px');
//
// $('h1, p, li').css('background-color', 'pink');
//
// var h1alerts = $('#header1').html() + " & " + $('#header2').html();
// alert(h1alerts);

//JQUERY MOUSE EVENTS CODE
$('.nav-item').click(function(e) {
	$('body').css('background-color', 'black');
	$('*').css('color', 'white');
});

$('#nav-item-3').dblclick(function(e){
	$('body').css('background-color', 'inherit');
	$('*').css('color', 'inherit');
});

let h11 = $('#header1').html();
let h12 = $('#header2').html();
let h13 = $('#header3').html();

$('img').hover(function(e){
	$('h1').html('WOW AN IMAGE!');
}, function(e){
	$('#header1').html(h11);
	$('#header2').html(h12);
	$('#header3').html(h13);
});