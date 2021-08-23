(function() {
	"use strict";
	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */

	let person = Object();
	person.firstName = "Joanna";
	person.lastName = "Foss";
	console.log(person.firstName);
	console.log(person.lastName);

	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */

	person.sayHello = function() {
		return "Hello from " + this.firstName + " " + this.lastName + "!"
	}

	console.log(person.sayHello());

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */

	var shoppers = [
		{name: 'Cameron', amount: 180},
		{name: 'Ryan', amount: 250},
		{name: 'George', amount: 320}
	];

	let twoHundy = 200;
	let twelveOff = 0.12;

	shoppers.forEach(function(shopper) {
		if (shopper.amount < twoHundy) {
			console.log(shopper.name + ", your amount before the discount is $" + shopper.amount.toFixed(2) + ". Unfortunately, you do not qualify for our discount today so your total will still be $" + shopper.amount.toFixed(2) + ".");
		} else {
			console.log(shopper.name + ", your amount before the discount is $" + shopper.amount.toFixed(2) + ", and because that amount is greater than our spend $" + twoHundy.toFixed(2) + " discount offer, you are eligible to save " + (twelveOff * 100) + "% and your new total for your purchase today is " + (shopper.amount - (shopper.amount * twelveOff)).toFixed(2) + "!");
		}
	});

	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */
let books = [
	{
		title: "Book 1",
		author: {
			firstName: "FirstName1",
			lastName: "LastName1",
		}
	},
	{
		title: "Book 2",
		author: {
			firstName: "FirstName2",
			lastName: "LastName2",
		}
	},
	{
		title: "Book 3",
		author: {
			firstName: "FirstName3",
			lastName: "LastName3",
		}
	},
	{
		title: "Book 4",
		author: {
			firstName: "FirstName4",
			lastName: "LastName4",
		}
	},
	{
		title: "Book 5",
		author: {
			firstName: "FirstName5",
			lastName: "LastName5",
		}
	},
	];

	console.log(books[0].title);
	console.log(books[0].author.firstName);
	console.log(books[0].author.lastName);

	console.log(books[1].title);
	console.log(books[1].author.firstName);
	console.log(books[1].author.lastName);

	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
	books.forEach(function (book, index) {
		console.log("Book #" + (index + 1));
		console.log("Title: " + book.title);
		console.log("Author: " + book.author.firstName + " " + book.author.lastName);
		console.log("---");
	});

	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */
	let newBooksArray = [];

	 function createBook(title, authorName) {
	 	let newBook = {};
	 	let authorArray = authorName.split(" ");
	 	let authorFirst = authorArray[0];
	 	let authorLast = authorArray[1];

	 	newBook.title = title;
	 	newBook.author = {};
	 	newBook.author.firstName = authorFirst;
	 	newBook.author.lastName = authorLast;

	 	// newBooksArray.push(newBook);
	 	return newBook;
	 }
	 // createBook("Booky Book", "Booker Writington");
	 //
	 // console.log(newBooksArray);
	 //
	 // createBook("Another Lil Booky Book", "Booker2 WritingtonJR");
	 //
	 // console.log(newBooksArray);

	 let newUserBook = createBook("Booky Book", "Booker Writington");
	 newBooksArray.push(newUserBook);

	 let newUserBook2 = createBook("Another Lil Booky Book", "Booker2 WritingJR");
	 newBooksArray.push(newUserBook2);

	 console.log(newBooksArray);

	 function showBookInfo(bookNumber) {
	 		console.log("The book you've chosen is #" + bookNumber + " and the information for that book is as follows:")
	 		console.log("Book title: " + newBooksArray[bookNumber-1].title);
	 		console.log("Book author: " + newBooksArray[bookNumber-1].author.firstName + " " + newBooksArray[bookNumber-1].author.lastName + ".");
	 }
	 showBookInfo(2);
	 showBookInfo(1);

})();