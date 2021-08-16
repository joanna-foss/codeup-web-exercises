"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello " + name ;
}
console.log("Hello" + name + ".");
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello("Joanna");
console.log(helloMessage + ".");
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Joanna";
console.log(sayHello(myName));
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(x) {
    // if (x !== 2) {
    //     return false;
    // } else
    //     return true;
    return x === 2;
}

isTwo(random);
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tip, bill) {
    return tip * bill;
}
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let mealTotal = prompt("How much was your meal?");
let percentageTip = prompt("What percentage would you like to tip?")/100;
alert("Your suggested tip amount is $" + calculateTip(mealTotal, percentageTip) + ".");

alert("This section is a lil extra and redundant and not exactly what was asked for but done anyway... Thank you for dining at our restaurant! Now it is time to pay for your visit.");
let food = prompt("How much was the cost of your food?");
let tip = (prompt("What percentage would you like to tip?"))/100;
let total = calculateTip(tip, food) + Number(food);
total = total.toFixed(2);
alert("Excellent! The total cost of your tip is $" + calculateTip(tip, food) + ".");
alert("The total cost of your visit is $" + total + ". Thank you for your patronage!");
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(x, y) {
    if ((y >= 1) || (y <= 0)) {
        alert("No. Wrong. Try again.");
        return;
    } else
        total = x - (x * y);
        console.log("Your discounted amount is $" + total + ".");
        return total;
}

function applyDiscountExtra() {
    let price = prompt("What is the original cost of your purchase?");
    let discountPercent = (prompt("What is the discount percentage available to you?"))/100;
    let discountAmount = price * discountPercent;
    let total = price - discountAmount;
    total = total.toFixed(2);
    discountAmount = discountAmount.toFixed(2);
    alert("The total cost after applying your discount is $" + total + " with a discounted amount of " + discountAmount + ". Wow! You're a savings super star!");
    console.log("The total cost after applying your discount is $" + total + " with a discounted amount of " + discountAmount + ". Wow! You're a savings super star!");
}