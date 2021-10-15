"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon'); //more info on fetch here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?
// console.log(pokemonAPI);
//TODO: add a method that runs if the Promise resolves successfully
//TODO: add a method that runs if the Promise fails
//TODO: In the callback function of the .then method, parse the response into JSON
// pokemonAPI.then(function(results){
// 	console.log(results);
// 	// results.text().then((text) => console.log(text)); //returns the text of the results
// 	results.json().then((results) => console.log(results));	//returns the json
// }).catch(function(error){
// 	console.log(error);
// });

// fetch('https://pokeapi.co/api/v2/pokemon') //<-- douglas's favorite method of doing a fetch request
// 	.then((response) => response.json())
// 	.then((jsonData) => jsonData.results)
// 	.then((results) => results.forEach((result) => console.log(result.name)));

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of the first returned response. Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the returned pokemon.
// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API.
// TODO: Use Promise chaining to console log the json response.
// TODO: chain another method that iterates through the results array and console logs the names.

// fetch('https://swapi.dev/api/films')
// 	.then((response) => {
// 		return response.json();	// <-- can we chain a .then method on this .json()? Why/why not??
// 	}).then((jsonData) => {
// 		console.log(jsonData);	//returns json object
// 		console.log(jsonData.results);	//returns the results from the json object
// 		jsonData.results.forEach((film)=>{console.log(film.title);});	//returns
// 	});

// TODO: Demonstrate Promise.all and Promise.race BONUS LESSON ONLY

let pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
let starWarsAPI = fetch('https://swapi.dev/api/films');

// Promise.all([pokemonAPI, starWarsAPI])
// 	.then((responses)=>{
// 		// console.log(responses[0].json().then((parsedData)=>{
// 		// 	console.log(parsedData);
// 		// 	console.log(parsedData.results);
// 		// }))
// 		return Promise.all(
// 			responses.map((responses)=>{
// 				return responses.json()
// 			})
// 		);
// 	}).then(parsedResults=>{
// 		console.log(parsedResults);
// 	});

Promise.race([pokemonAPI, starWarsAPI]) // .race ONLY comes back with the fetch request that responds FIRST
	.then((response)=>{
		console.log(response);
	})