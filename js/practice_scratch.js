//Scratch Practice

//08.13.2021
console.log(addOne(2));

function addOne(x) {
    return x + 1;
}
//Additional Exercises from Kenneth Howell on Slack 08.21.2021
function returnTwo() {
    return 2;
}
console.log(returnTwo());

function sayHowdy() {
    console.log("Howdy!");
}

sayHowdy();

function returnName() {
    return "Joanna";
}
console.log(returnName());

function addThree(x) {
    return x + 3;
}
console.log(addThree(5));

function sayString(input) {
    return input.toString();
}
console.log(sayString('codeup'));

function identity(input) {
    return input;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * ((max - min) + min));
}
console.log(getRandomNumber(2, 50));

function first(input) {
    return input[0];
}
console.log(first("heyo"));

function last(input) {
    let number = input.length - 1
    return input[number];
}
console.log(last("heyo"));

function rest(input) {
    return input.slice(1);
}
console.log(rest("heyo"));

function reverse(input) {
   return input.split('').reverse().join('');
}
console.log(reverse("heyo"));

function isNumeric(input) {
    if  (isNaN(input) == false) {
        return true;
    } else
        return false;
}

function count(input) {
    return input.length;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function square(a) {
    return a * a;
}

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

function doMath(x, a, b) {
    let x1 = x(a, b);
    return x1;
}
//08.13.2021

