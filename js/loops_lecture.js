"use strict";
//
//~*~ While Loops ~*~
//

//are we there yet?
console.log("Let's goooooo...");

var areWeThereYet;

while(!areWeThereYet) {
    areWeThereYet = confirm("Are we there yet?");
}

console.log("STEP 1? Done!");
// In the above example, we'll continue to prompt the user asking if we're there yet until we finally get
// a positive confirmation. While the condition is not true (!areWeThereYet), do some stuff (from the body of the loop)

var haveToy = confirm("Can I have the toy, please?!");

//Past modules: Using the var into an alert and show that we've captured that value.

//alert("Hey, it is " + haveToy + " that you can have the toy.");

//NOW: How we can use this variable + boolean inside with a while loop?

while(!haveToy) {
    haveToy = confirm("PLEASE MOMMY!! CAN I PLEASE HAVE THE TOY???");
}

if(haveToy) {
    console.log("Thanks Mommy! Iloveyousomuchyou'rethebest :)))))");
}

console.log("STEP 2? Done!");
// Notice that much like an if statement, our while loop will only run if the initial condition is met.
// If we give Codie the toy from the get go, we won't see the behavior in the loop at all.

// TODO: Quasar~ create a WHILE loop that runs as long as i is less than 10;

let i = 0;
while(i < 10){
    console.log("Your i value is " + i + ".");
    i++;
}

console.log("Your i value finally reached " + i + ". Congratulations!!");

console.log("STEP 3? Done!");

//~*~ Do-While Loops ~*~


// A do/while loop is quite similar to a while loop. The biggest difference is that a do/while loop will run at least once
// [do this thing for sure this first time . . then check condition to continue VS. check condition . . will I do this thing at all?]

// do {
//  Code to be run.
// } while (condition)

// Consider:

while (false) {
    console.log("will you ever see me?");
}

do {
    console.log("But what about me?");
} while (false);

console.log("STEP 4? Done!");

// Notice that even with a condition that has a boolean value of false, the do while loop will run one time be for stopping.

do {
    var secret = prompt("Password?");
} while (secret !== "");

console.log("STEP 5? Done!");

// We can also use what we've learned above within the body of your functions:

//Multiply by two. . until it is greater than 100.
//Parameter to accept a num argument when calling - this parameter will be our starting point.

function multiplyByTwoUntilGreaterThan100(num) {
    while (num < 100) {
        console.log("Your number is " + num + ".");
        num *= 2;
    }
    return num;
}

console.log(multiplyByTwoUntilGreaterThan100(5));

console.log("STEP 6? Done!");

// For loops: Loops that are designed to run a given number of times. Think more math thinking.

for (var incrementer = 1; incrementer <= 5; incrementer++) {
    console.log("This loop has run " + incrementer + " time(s).");
}

console.log("STEP 8? Done!")

// The for loop has more to it as you can see. Let's break down the arguments:

// - incrementer initialization - Here we are declaring the variable for our incrementer, as well as its value.

// - condition - The loop will continue to run until this condition is no longer true.

// - incrementer change - what happens to the incrementer in once the loop has finished executing the code for a given iteration.

// Once again, we can use this in a function.

function sayHelloXTimes(num) {
    for (num; num >= 0; num--) {
        if (num % 5 === 0) {
            console.log("Howdy number " + num);
        } else {
            console.log("Hello number " + num);
        }
    } return num;
}

sayHelloXTimes(5);


// And we can use this with conditionals! This is a semi famous for loop from Fizz Buzz.

for (var a = 0; a < 6; a++){
    if (a % 6 == 0) console.log("Codeup");
    else if (a % 2 == 0) console.log("Code");
    else if (a % 3 == 0) console.log("Up");
    else console.log(a);
}

console.log("STEP 9? Done!");

// TODO: Quasar, how would we refactor the above back into a WHILE loop as we saw earlier?

// Below is a funky example that works, but will rely on moving between different data types.
// for (var i = "A"; i.length < 8; i = i + "A") {
//     console.log("This is a bit of a tricky way to run a for loop, but hey, it works...");
// }

// We can get a loop to stop using break;

// var x = 0;
//
// while (true) {
//     alert("This is the song that never ends. It just goes on and on my friends. Somebody started singing not knowing what it was, and now we'll all just keep on singing this because");
//     x++;
//     if (x === 5) {
//         alert("LambChop, cut it out!!")
//         break;
//     }
// }


// for (var j = 5; j < 100000; j += 5) {
//     if (j === 25) {
//         break;
//     }
//     console.log(j);
// }

// Notice that by having the break, we're able to get out of the loop that would otherwise run forever.


// we can also use continue to allow a loop to skip an iteration.

function allOddNumbersToX (x) {
    for (var i = 0; i <= x; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
    return x;
}

// allOddNumbersToX(17);
// allOddNumbersToX(18);


// The above function will only log the odd numbers until the argument passed.