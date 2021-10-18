"use strict";

//THIS MAY COME IN HANDY FOR HAVING A LOADING SCREEN.
switch(document.readyState) {
	case "loading":
		console.log("loading...");
	case "interactive":
		console.log("interactive...");
		// const span = document.createElement("span");
		// span.textContent = "A <span> element.";
		// document.body.appendChild(span);
	case "complete":
		console.log("complete");
		break;
}

let options = {method: 'GET'} //edit as needed.
let movies = [];

//THIS GETS YOU THE LIST OF MOVIES FROM THE DATABASE.
let somedata = fetch('https://wise-citrine-swordfish.glitch.me/movies', options) //<--options here is optional.
	.then(response=>response.json().then(data=>data));

//I DON"T KNOW WHAT I"M DOING.