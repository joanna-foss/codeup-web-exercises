"use strict";


//For your situational awareness...
alert("This alert starts the break and continue javascript!");
console.log("BREAK AND CONTINUE JAVASCRIPT:");

function oddNum() {
    let chosenNum = ""
    do {
        chosenNum = prompt("You have been given the opportunity to choose an odd number between 1 and 50. Choose wisely.");
    } while ((chosenNum % 2 == 0) || (chosenNum > 50) || (chosenNum < 0));
    console.log("Number to skip is: " + chosenNum + ".");
    for (let i = 0; i < 50; i++) {
        if (i % 2 == 0) {
            continue;
        }
        if (i == chosenNum) {
            console.log("Yikes! Skipping number: " + chosenNum);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }
}

oddNum();