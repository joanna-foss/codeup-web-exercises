(function () {
    "use strict";

    console.log('Welcome to the world of functions!');

//First way to declare a function:
    function sayHi() {
        console.log('Hi, Hello, Hey, Howdy, Hiya, etc...');
    }

    console.log('Intermediary stuff');

    sayHi();

//Second way to declare a function:
    var sayHowdyOnly = function () {
        console.log('Howdy!');
    }
//To call the above anonymous function you would use: sayHowdyOnly()
    sayHowdyOnly();

//Arguments and Parameters
    function add(x, y) {
        return x + y;
    }

    add(1, 2);
//The above does not return any data in the console of our browser.

    console.log("1 + 2 = " + add(1, 2) + ".");

//The above DOES return data in the console of our browser.

    function subtract(x, y) {
        return x - y;
    }

//Scope
    var instructor = "Douglas";
    var day = "Friday";

//The above variables are GLOBAL VARIABLES.

    function tellTheDay() {
        return "Tell " + instructor + " it's " + day + "!";
    }

    function greeting() {
        var username = "Kenneth";
        //The above variable is a LOCAL VARIABLE and is inaccessible outside of this function.
        return "Hi, " + username;
    }

    console.log(greeting());
//This will return "Hi, Kenneth" in our console.

// console.log(username);
// //This will return an error because username is a local variable only accessible within the function.
// //It is NOT accessible outside of that function because it has not been defined outside of that function.
// //If the above console.log(username) is not removed from the code, it will cause an error for the remainder
// //of any code that follows this error. You will see none of the code after this error. This needs to be removed.
})();
//The above code has been contained within an anonymous immediately invoked function expression (IIFE). This is
//helpful to contain your code in a way that prevents users from calling on certain functions from your code. It
//will not hide your code from the user, but it will protect it from being run by users in the console.