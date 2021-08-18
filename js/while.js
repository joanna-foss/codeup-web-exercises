"use strict";

alert("This is the while javascript!");

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
    let randomNumConesToSell = ''
    let cones = Math.floor(Math.random() * 50) + 50;
    console.log("I have " + cones + " ice cream cones to sell!");
    //first round of selling cones as long as total cones is greater than random num cones to sell
    do {
        randomNumConesToSell = Math.floor(Math.random() * 5) + 1;
        console.log("I'm selling you " + randomNumConesToSell + " whether you like it or not. HAHAHAHA!");
        if (cones > randomNumConesToSell){
            cones = (cones - randomNumConesToSell);
        }
    } while (cones > randomNumConesToSell);
    //once total cones drops below random num cones to sell
    console.log("GAH! I cannot sell you " + randomNumConesToSell + " because I only have " + cones + " cones left to sell.");
    do {
        randomNumConesToSell = Math.floor(Math.random() * cones) + 1;
        if (randomNumConesToSell > cones) {
            console.log("GAH! I cannot sell you " + randomNumConesToSell + " because I only have " + cones + " cones left to sell.");
        } else {
            console.log("I'm selling you " + randomNumConesToSell + " whether you like it or not. HAHAHAHA!");
        }
        cones = (cones - randomNumConesToSell);
    } while (cones >= 0);
    //cones sold out
    console.log("Alright y'all! Thanks for another great day of selling cones. See ya later!")
}

letsSellSomeIceCREAM();