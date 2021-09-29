"use strict";

console.log("test");

var userValue = '';

$('body').keydown(function(event) {
	console.log(event.key);
	userValue += event.key;
	if(userValue === "test"){
		alert("Booyah!");
	}
});

