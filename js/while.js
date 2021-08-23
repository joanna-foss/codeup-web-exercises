"use strict";


//For your situational awareness...
alert("This alert starts the while javascript!");
console.log("WHILE JAVASCRIPT:");

function multiplyBy2() {
    let x = 2;
    while (x < 65537) {
        console.log(x);
        x = (x * 2);
    }
}

multiplyBy2();

console.log("DONSIES!");


//Do While Loop Exercise below While exercise:

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

function letsSellSomeIceCREAM() {
    let randomNumConesToSell;
    let cones = Math.floor(Math.random() * 50) + 50;
    console.log("I have " + cones + " ice cream cones to sell!");
    //loop selling cones as long as total cones is greater than random num cones to sell
    do {
        randomNumConesToSell = Math.floor(Math.random() * 5) + 1;
        if (cones > randomNumConesToSell) {
            cones = (cones - randomNumConesToSell);
            console.log("#1 I'm selling you " + randomNumConesToSell + " cone(s) whether you like it or not. HA!");
        } else if (cones == randomNumConesToSell) {
            console.log("#1 You've just bought the last of my cones! I had " + cones + " cone(s) and you bought all " + randomNumConesToSell + ". Thanks! Cone again soon!");
            cones = (cones - randomNumConesToSell);
        } else {
            console.log("#1 I can't sell you " + randomNumConesToSell + " cone(s) because I only have " + cones + " cone(s) left. But...")
        }
    } while (cones > randomNumConesToSell);
    //loop once total cones drops below random num cones to sell
    while (cones > 0) {
        randomNumConesToSell = Math.floor(Math.random() * cones) + 1;
        if (cones == randomNumConesToSell) {
            console.log("#2 You've just bought the last of my cones! I had " + cones + " cone(s) and you bought " + randomNumConesToSell + " cone(s). Thanks! Cone again soon!");
            cones = (cones - randomNumConesToSell);
        } else {
            if (randomNumConesToSell > cones) {
                console.log("#2 GAH! I cannot sell you " + randomNumConesToSell + " cone(s) because I have " + cones + " cone(s) left to sell.");
            } else {
                console.log("#2 I'm selling you " + randomNumConesToSell + " cone(s), kay?");
                cones = (cones - randomNumConesToSell);
            }
        }
    }
}

letsSellSomeIceCREAM();

// check Tristan's version of solving this problem on Github.