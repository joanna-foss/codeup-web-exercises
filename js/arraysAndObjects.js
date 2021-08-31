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

function minMax(array) {
	//sort the array in ascending order
	array = array.sort(function(a, b) {
		return a - b;
	});
	//create new array
	minAndMaxOnly = Array();
	//add first element of array to minAndMaxOnly, then add last element
	minAndMaxOnly.push(array[0], array[array.length-1]);
	//return new 2 element array
	return minAndMaxOnly;
}

console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5, 2334434]
console.log(minMax([1])); // [1, 1]

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

function filterArray(array) {
	//create new array
	let filteredArray = Array();
	//check each item of input
	for(let i = 0; i < array.length; i++) {
		//if element is a string, skip
		if (typeof array[i] === 'string') {
			continue;
		//if element is not a string, add it to new array
		} else {
			filteredArray.push(array[i]);
		}
	}
	// return new array with no strings
	return filteredArray;
}

console.log(filterArray([1, 2, "a", "b"])); // [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])); // [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])); // [1, 2, 123]

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

function isAvgWhole(array) {
	//create variable to add to
	let sum = 0;
	//check each item of input and add that value to the above variable
	for(let i = 0; i < array.length; i++) {
		sum += array[i];
	};
	//reassign the value of sum to equal the old value of sum divided by # of elements
	sum = sum / array.length;
	//create a variable that will be the sum rounded to the nearest integer
	let sumParsed = parseInt(sum);
	//if sum was already an integer not needing to be rounded, return true
	return sum === sumParsed;
}

console.log(isAvgWhole([1, 3])); //true
console.log(isAvgWhole([1, 2, 3, 4])); //false
console.log(isAvgWhole([1, 5, 6])); //true
console.log(isAvgWhole([1, 1, 1])); //true
console.log(isAvgWhole([9, 2, 2, 5])); //false

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

function sortDrinkByPrice(drinks) {
	//create new array with drinks sorted by cheapest price
	let drinksArr = drinks.sort(function(a, b) {
		return a.price - b.price;
	})
	//return new array
	return drinksArr;
}

drinks = [
	{name: "lemonade", price: 50},
	{name: "lime", price: 10}
	]

console.log(sortDrinkByPrice(drinks));

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

function maxScore(tileArray) {
	//create new variable to add score values to
	let total = 0;
	//check each object in the array and add the score property value to the above variable;
	for(let i = 0; i < tileArray.length; i++) {
		total += tileArray[i].score;
	}
	//return the new total
	return total;
}

let scrabbleTiles1 = [
	{ tile: "N", score: 1 },
	{ tile: "K", score: 5 },
	{ tile: "Z", score: 10 },
	{ tile: "X", score: 8 },
	{ tile: "D", score: 2 },
	{ tile: "A", score: 1 },
	{ tile: "E", score: 1 }
]

let scrabbleTiles2 = [
	{ tile: "B", score: 2 },
	{ tile: "V", score: 4 },
	{ tile: "F", score: 4 },
	{ tile: "U", score: 1 },
	{ tile: "D", score: 2 },
	{ tile: "O", score: 1 },
	{ tile: "U", score: 1 }
]

let scrabbleTiles3 = [
	{ tile: "N", score: 1 },
	{ tile: "K", score: 5 },
	{ tile: "Z", score: 10 },
	{ tile: "X", score: 8 },
	{ tile: "D", score: 2 },
	{ tile: "A", score: 1 },
	{ tile: "E", score: 1 }
]

console.log(maxScore(scrabbleTiles1)); //28
console.log(maxScore(scrabbleTiles2)); //15
console.log(maxScore(scrabbleTiles3)); //28

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

function toArray(object) {
	let objToArr = Object.entries(object);
	return objToArr;
}

console.log(toArray({a: 1, b: 2}));
console.log(toArray({shrimp: 15, tots: 12}));
console.log(toArray({}));

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
function arrayOfMultiples(num, length) {
	let multiplesArr = [];
	for(let i = 0; i < length; i++) {
		multiplesArr.push((i+1) * num);
	};
	return multiplesArr;
}

console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));

/**
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

function getBudgets(array) {
	let total = 0;
	for(let i = 0; i < array.length; i++) {
		total += array[i].budget;
	}
	return total;
}

console.log("Sum of budget amounts: $" + getBudgets([
	{ name: "John", age: 21, budget: 23000 },
	{ name: "Steve",  age: 32, budget: 40000 },
	{ name: "Martin",  age: 16, budget: 2700 }
]));

console.log("Sum of budget amounts: $" + getBudgets([
	{ name: "John",  age: 21, budget: 29000 },
	{ name: "Steve",  age: 32, budget: 32000 },
	{ name: "Martin",  age: 16, budget: 1600 }
]));

/**
 * Special Arrays
 * An array is special if every even index that contains an even number and every odd index contains an odd number.
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

function isSpecialArray(array) {
	for(let i = 0; i < array.length; i++) {
		//if index # & element are both even numbers, skip number and loop
		if (i % 2 === 0 && array[i] % 2 === 0) {
			continue;
		//if index # & element are both odd numbers, skip number and loop
		} else if (i % 2 !== 0 && array[i] % 2 !== 0) {
			continue;
		//if index # & element are a combination of one even and one odd #, return false
		} else {
			return false;
		}
	//if all elements of the array are checked for even match or odd match and none return false, return true
	} return true;
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); //true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); //false
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); //false


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

function removeDuplicates(array) {
	let noDupesArr = [...new Set(array)];
	return noDupesArr;
}

console.log(removeDuplicates([1, 0, 1, 0]));
console.log(removeDuplicates(["The", "big", "cat"]));
console.log(removeDuplicates(["John", "Taylor", "John"]));

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

function mapping(letters) {
	let lettersObjArr = Object.fromEntries()
}

console.log(mapping(["p", "s"]));

/**
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


/**
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