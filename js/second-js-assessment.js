"use strict";

console.log("test");

/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

// function minMax(array) {
// 	array.sort(function(a, b){return a-b;}); //sorted from smallest to largest
// 	let minAndMax = []; //empty array to push to
// 	minAndMax.push(array[0], array[array.length-1]); //push first and last number of input array into empty array
// 	return minAndMax;
// };

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */

// function filterArray(array){
// 	let newArr = array.filter(function(value){ //new variable that filters
// 		if(typeof value !== 'string') { //checks value for type; if value NOT string
// 			return value; //return value to the newArr
// 		}
// 	});
// 	return newArr; //return all values of newArr
// };
//
// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

/**
 * Is the Average of All Elements a Whole Number?
 * Create a function named isAvgWhole that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
 *
 * Examples
 *
 * >> isAvgWhole([1, 3]) ➞ true
 * >> isAvgWhole([1, 2, 3, 4]) ➞ false
 * >> isAvgWhole([1, 5, 6]) ➞ true
 * >> isAvgWhole([1, 1, 1]) ➞ true
 * >> isAvgWhole([9, 2, 2, 5]) ➞ false
 */

// function isAvgWhole(array){
// 	let addMach = function(prev, next){return prev + next;}; //this is the reducer that reduce() needs to calculate a total of all nums in array
// 	let avgOfArr = array.reduce(addMach)/array.length; //sum of nums in array divided by num of nums in array
// 	return Number.isInteger(avgOfArr); //checks for integer status & returns boolean
// };
//
// console.log(isAvgWhole([1, 3]));
// console.log(isAvgWhole([1, 2, 3, 4]));
// console.log(isAvgWhole([1, 5, 6]));
// console.log(isAvgWhole([1, 1, 1]));
// console.log(isAvgWhole([9, 2, 2, 5]));

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */

// let drinks = [
// 	{name: "lemonade", price: 50},
// 	{name: "lime", price:10}
// ]
//
// function sortDrinkByPrice(array){
// 	array.sort(function(a, b){return a.price - b.price});
// 	return array;
// };
//
// console.log(sortDrinkByPrice(drinks));

/**
 * Scrabble Hand
 * Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.
 *
 * Here's an example hand:
 *
 * [
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 * ]
 *
 * The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
 *
 * Examples
 *
 * >> maximumScore([
 *      { tile: "N", score: 1 },
 *      { tile: "K", score: 5 },
 *      { tile: "Z", score: 10 },
 *      { tile: "X", score: 8 },
 *      { tile: "D", score: 2 },
 *      { tile: "A", score: 1 },
 *      { tile: "E", score: 1 }
 *    ]) ➞ 28
 *
 * >> maximumScore([
 *      { tile: "B", score: 2 },
 *      { tile: "V", score: 4 },
 *      { tile: "F", score: 4 },
 *      { tile: "U", score: 1 },
 *      { tile: "D", score: 2 },
 *      { tile: "O", score: 1 },
 *      { tile: "U", score: 1 }
 *    ]) ➞ 15
 *
 * Notes
 * Each tile is represented as an object with two keys: tile and score.
 */
let tiles1 = [
	{ tile: "N", score: 1 },
	{ tile: "K", score: 5 },
	{ tile: "Z", score: 10 },
	{ tile: "X", score: 8 },
	{ tile: "D", score: 2 },
	{ tile: "A", score: 1 },
	{ tile: "E", score: 1 }
]

let tiles2 = [
	{ tile: "B", score: 2 },
	{ tile: "V", score: 4 },
	{ tile: "F", score: 4 },
	{ tile: "U", score: 1 },
	{ tile: "D", score: 2 },
	{ tile: "O", score: 1 },
	{ tile: "U", score: 1 }
]

//START FROM HERE!!!!!!!!!!!!!!!!!

// function maximumScore(arrTiles){
// 	let total = 0;
// 	for(let i = 0; i < arrTiles.length; i++){
// 		total += arrTiles[i].score;
// 	};
// 	return total;
// }
//
// console.log(maximumScore(tiles1)); //28
// console.log(maximumScore(tiles2)); //15

/**
 * Converting Objects to Arrays
 * Write a function named toArray that converts an object into an array, where each element represents a key-value pair in the form of an array.
 *
 * Examples
 *
 * >> toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
 * >> toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
 * >> toArray({}) ➞ []
 *
 * Notes
 * Return an empty array if the object is empty.
 */

// function toArray(obj){
// 	let newArr = new Array(0);
// 	for(let [key, value] of Object.entries(obj)){
// 		newArr.push([key, value]);
// 	}
// 	return newArr;
// }
//
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//
// console.log(toArray({a: 1, b: 2}));
// console.log(toArray({shrimp: 15, tots: 12}));
// console.log(toArray({}));

/**
 * Array of Multiples
 * Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 *
 * Examples
 *
 * >> arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * >> arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * >> arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes
 * Notice that num is also included in the returned array.
 */


// function arrayOfMultiples(num, length){
// 	let arr = [];
// 	for(let i=1; i<=length; i++){
// 		arr.push(num*i);
// 	}
// 	return arr;
// }
//
// console.log(arrayOfMultiples(7, 5)); //[7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); //[17, 34, 51, 68, 85, 102]

/** DO THIS BEFORE THE ASSESSMENT
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

// function getBudgets(arrOfObjs){
// 	let pplsBudgets=0;
// 	for(let i=0; i < arrOfObjs.length; i++){
// 		pplsBudgets += arrOfObjs[i].budget;
// 	}
// 	return pplsBudgets
// }
//
// console.log(getBudgets([
// 	{name: "John", age: 21, budget: 23000},
// 	{name: "Steve", age: 32, budget: 40000},
// 	{name: "Martin", age: 16, budget: 2700}
// ])); //65700
// console.log(getBudgets([
// 	{name: "John", age: 21, budget: 29000},
// 	{name: "Steve", age: 32, budget: 32000},
// 	{name: "Martin", age: 16, budget: 1600}
// ])); //62600

/**
 * Special Arrays
 * An array is special if every even index contains an even number and every odd index contains an odd number.
 * Create a function named isSpecialArray that returns true if an array is special, and false otherwise.
 *
 * Examples
 *
 * >> isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
 *    // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
 * >> isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
 *    // Index 2 has an odd number 9.
 * >> isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
 *    // Index 3 has an even number 8.
 */

// function isSpecialArray(array){
// 	for(let i = 0; i < array.length; i++){
// 		if((i + array[i]) % 2 === 0){
// 			continue;
// 		} else {
// 			return false;
// 		}
// 	} return true;
// }
//
// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

/**
 * Remove Duplicates from an Array
 * Create a function named removeDuplicates that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
 *
 * Examples
 * >> removeDuplicates([1, 0, 1, 0]) ➞ [1, 0]
 * >> removeDuplicates(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
 * >> removeDuplicates(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
 *
 * Notes
 * Tests contain arrays with both strings and numbers.
 * Tests are case sensitive.
 * Each array item is unique.
 */

// function removeDuplicates(array){
// 	let newArr = [...new Set(array)];
// 	return newArr;
// }
//
// console.log(removeDuplicates([1, 0, 1, 0]));
// console.log(removeDuplicates(["The", "big", "cat"]));
// console.log(removeDuplicates(["John", "Taylor", "John"]));

/**
 * Lowercase and Uppercase Map
 * Create a function named mapping that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
 *
 * Examples
 *
 * >> mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
 * >> mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
 * >> mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
 *
 * Notes
 * All of the letters in the input list will always be lowercase.
 */
// revisit this exercise!!!

// function mapping(array){
// 	let newObj = Object.fromEntries(array.map(function(key){
// 		return [key, key.toUpperCase()]
// 	}));
// 	// let newObj = array.reduce((ac,a) => ({...ac,[a]:''}),{});
// 	return newObj;
// }
//
// console.log(mapping(["p", "s"]));
// console.log(mapping(["a", "b", "c"]));
// console.log(mapping(["a", "v", "y", "z"]));

/** START HERE!!!
 * Can You Spare a Square?
 * Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
 *
 * Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
 *
 * Create a function named tpChecker that will receive an object with two key/values:
 *
 *   people — Number of people in the household.
 *   tp — Number of rolls.
 *
 * Return a statement telling the user if they need to buy more TP!
 *
 * Examples
 *
 * >> tpChecker({ people: 4, tp: 1 }) ➞ "Your TP will only last 2 days, buy more!"
 * >> tpChecker({ people: 3, tp: 20 }) ➞ "Your TP will last 58 days, no need to panic!"
 * >> tpChecker({ people: 4, tp: 12 }) ➞ "Your TP will last 26 days, no need to panic!"
 */

function tpChecker(){

}

console.log(tpChecker({people: 4, tp: 1}));
console.log(tpChecker({people: 3, tp: 20}));
console.log(tpChecker({people: 4, tp: 12}));

/**
 * Get Student Top Notes
 * Create a function named getStudentTopNotes that takes an array of students and returns an array of their top notes.
 * If the student does not have notes then let's assume their top note is equal to 0.
 *
 * Examples
 *
 * >> getStudentTopNotes([
 *      {
 *         id: 1,
 *         name: "Jacek",
 *         notes: [5, 3, 4, 2, 5, 5]
 *       },
 *      {
 *         id: 2,
 *         name: "Ewa",
 *         notes: [2, 3, 3, 3, 2, 5]
 *       },
 *      {
 *         id: 3,
 *         name: "Zygmunt",
 *         notes: [2, 2, 4, 4, 3, 3]
 *       }
 *    ]) ➞ [5, 5, 4]
 */


/**
 * The Frugal Gentleman
 * Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.
 *
 * Given an array of wine objects, write a function named chosenWine that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.
 *
 * Examples
 *
 * >> chosenWine([
 *        { name: "Wine A", price: 8.99 },
 *        { name: "Wine 32", price: 13.99 },
 *        { name: "Wine 9", price: 10.99 }
 *    ]) ➞ "Wine 9"
 * >> chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
 * >> chosenWine([]) ➞ null
 *
 * Notes
 * All wines will be different prices, so there is no confusion in the ordering.
 */


/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 */


/** DO THIS ONE BEFORE THE ASSESSMENT
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */