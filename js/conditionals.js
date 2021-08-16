"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var aColor = prompt("Type in a color below.").toLowerCase()

function analyzeColor1(input) {
    if (input == "blue") {
        return "(analyzeColor1) An ingestible item that correlates with your color is BLUEBERRIES";
    } else if (input == "green") {
        return "(analyzeColor1) An ingestible item that correlates with your color is BELL PEPPERS";
    } else if (input == "red") {
        return "(analyzeColor1) An ingestible item that correlates with your color is STRAWBERRIES";
    } else if (input == "white") {
        return "(analyzeColor1) An ingestible item that correlates with your color is CAULIFLOWER";
    } else if (input == "black") {
        return "(analyzeColor1) An ingestible item that correlates with your color is MOLDY DISGUSTING BREAD";
    } else if (input == "purple") {
        return "(analyzeColor1) An ingestible item that correlates with your color is PLUMS";
    } else if (input == "pink") {
        return "(analyzeColor1) An ingestible item that correlates with your color is PINK LEMONADE";
    } else if (input == "yellow") {
        return "(analyzeColor1) An ingestible item that correlates with your color is LEMON";
    } else if (input == "orange") {
        return "(analyzeColor1) An ingestible item that correlates with your color is ORANGES";
    } else {
        return "NO!";
    }
}

alert(analyzeColor1(aColor));

console.log(analyzeColor1(aColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("(RANDOM) " + analyzeColor1(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor2(input) {
    switch(input) {
        case "blue":
            alert("analyzeColor2 function: BLUEBERRIES");
            console.log("analyzeColor2 function: BLUEBERRIES");
            break;
        case "green":
            alert("analyzeColor2 function: BELL PEPPERS");
            console.log("analyzeColor2 function: BELL PEPPERS");
            break;
        case "red":
            alert("analyzeColor2 function: STRAWBERRIES");
            console.log("analyzeColor2 function: STRAWBERRIES");
            break;
        case "yellow":
            alert("analyzeColor2 function: LEMONS");
            console.log("analyzeColor2 function: LEMONS");
            break;
        case "white":
            alert("analyzeColor2 function: CAULIFLOWER");
            console.log("analyzeColor2 function: CAULIFLOWER");
            break;
        case "black":
            alert("analyzeColor2 function: DISGUSTING MOLDY BREAD");
            console.log("analyzeColor2 function: DISGUSTING MOLDY BREAD");
            break;
        case "purple":
            alert("analyzeColor2 function: PLUMS");
            console.log("analyzeColor2 function: PLUMS");
            break;
        case "orange":
            alert("analyzeColor2 function: ORANGES");
            console.log("analyzeColor2 function: ORANGES");
            break;
        case "pink":
            alert("analyzeColor2 function: PINK LEMONADE");
            console.log("analyzeColor2 function: PINK LEMONADE");
        default:
            alert("analyzeColor2 function: NO!");
            console.log("analyzeColor2 function: NO!");
            break;
    }
}

analyzeColor2(randomColor);
analyzeColor2(aColor);
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//DID ABOVE. NEED TO DO AGAIN?? ASK KENNETH

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum, totalNum) {
    if (luckyNum === 0) {
        return totalNum
    } else if (luckyNum === 1) {
        return totalNum - (Number(totalNum) * .10)
    } else if (luckyNum === 2) {
        return totalNum - (Number(totalNum) * .25)
    } else if (luckyNum === 3) {
        return totalNum - (Number(totalNum) * .35)
    } else if (luckyNum === 4) {
        return totalNum - (Number(totalNum) * .50)
    } else if (luckyNum === 5) {
        return totalNum - (Number(totalNum) * 1)
    }
}

//console.log("You're gonna pay $" + calculateTotal(3, 100).toFixed(2));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function letsPlay(input) {
    if (input == true) {
        let userInputBill = prompt("What is your bill total?");
        userInputBill = Number(userInputBill).toFixed(2);
        alert("Your lucky number is " + luckyNumber + ".");
        alert("Your price before the discount is $" + userInputBill + ".");
        alert("You price after the discount is $" + calculateTotal(luckyNumber, userInputBill) + "!")
    } else {
        let noDiscountBill = prompt("Okay then! No discount for you! What is your bill total?");
        noDiscountBill = Number(noDiscountBill).toFixed(2);
        alert("Your bill total WITH NO DISCOUNT will be $" + noDiscountBill + ".");
    }
}

let luckyNumPlay = confirm("Do you want to play the Lucky Number Discount Game? You'll receive a percentage amount off of your total purchase if you do!");

letsPlay(luckyNumPlay);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function letsPlayNumGame() {
    let wouldYou = confirm("Would you like to play a game and enter a number?");
    if (wouldYou == true) {
        let numberChosen = prompt("Now is your moment. Enter in a number!");
        if(numberChosen % 2 == 0) {
            alert("Your number is even!");
        } else
            alert("Your number is odd!");
        alert("Your number plus 100 is " + (Number(numberChosen) + 100) + ".");
        if(numberChosen < 0) {
            alert("Your number is a negative number. Oof.");
        } else if (numberChosen > 0) {
            alert("Your number is a positive number. Woot.");
        } else {
            alert("Your number is ZERO and zero is a neutral non-positive, non-negative number.");
        }
    } else
    alert("Welp. Bye.");
}

letsPlayNumGame();