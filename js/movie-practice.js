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

//THIS GETS YOU THE LIST OF MOVIES FROM THE DATABASE.
fetch('https://wise-citrine-swordfish.glitch.me/movies', options) //<--options here is optional.
	.then(response=> {
		if (response.ok) {
			console.log("success");
		} else {
			console.log("not success");
		}
		return response.json()
	})
	.then(response=>{
		console.log(response);
		let html = '';
		response.forEach(function(elem, index, array){
			//CBB use newly learned ES6 techniques to pull properties into values perhaps
			if(typeof elem.title !== 'undefined') {
				html +=
					'<div class="card d-flex flex-column align-items-center"><h1>' +
					elem.title + '</h1><br>' +
					'<img src="' + elem.poster + '" class="h-50 w-50"><br>' +
					elem.year + ' // ' + elem.genre + '<br>' +
					'actors: ' + elem.actors + '<br>' +
					'directed by: ' + elem.director +
					'</div>'
			} else {
				console.log('unidentified movie log');
			}
		})
		document.getElementById('ogContainer').innerHTML = html})

//I DON'T KNOW WHAT I'M DOING.