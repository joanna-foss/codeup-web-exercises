"use script";

alert("This is the for loops javascript!");

//Q1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.
console.log("Question 1")
//Q2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
console.log("Question 2");
function showMultiplicationTable(x) {
    console.log("The following is a multiplication table for " + x + ":");
    for (let i = 1; i <= 10; i++) {
        console.log(x + " x " + i + " = " + (x * i));
    }
}

showMultiplicationTable(1);
showMultiplicationTable(10);

//Q3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
console.log("Question 3");
for (let a = 1; a <= 10; a++) {
    let random = Math.floor((Math.random() * 200) + 20);
    if(random % 2 == 0) {
        console.log(random + " is an even number.");
    } else {
        console.log(random + " is an odd number.");
    }
}

//Q4. Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
console.log("Question 4");

for (let a = 1; a <= 9; a++) {
    let item = a.toString();
    console.log(item.repeat(a));
}

//Q5. Create a for loop that uses console.log to create the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
console.log("Question 5");

for (let i = 100; i >= 1; i -= 5) {
    console.log(i.toString());
}