// //JavaScript with HTML Exercises
// "use strict";
//
// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website!');
// var userColor = prompt('What is your favorite color?');
// alert("That's awesome. My favorite color is " + userColor + " too!");
// console.log("That's awesome. My favorite color is " + userColor + " too!");
//
//
// //Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// //You have rented some movies for your kids:
// //The little mermaid (for 3 days),
// //Brother Bear (for 5 days, they love it),
// //and Hercules (1 day, you don't know yet if they're going to like it).
// //If price for a movie per day is $3, how much will you have to pay?
// var lilMer = prompt('How many days would you like to rent The Little Mermaid?');
// var broBear = prompt('How many days would you like to rent Brother Bear?');
// var herc = prompt('How many days would you like to rent Hercules?');
// var totalPay = (Number(lilMer) + Number(broBear) + Number(herc)) * 3;
//
// alert("You will have to pay $" + totalPay + " for your kid's movies.");
// console.log("You will have to pay $" + totalPay + " for your kid's movies.");
//
//
// //Suppose you're working as a contractor for 3 companies:
// //Google, Amazon and Facebook, they pay you a different rate per hour.
// //Google pays $400, Amazon $380, and Facebook $350.
// //How much will you receive in payment for this week?
// //You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// var google = Number(prompt('How much does Google pay per hour of work?'));
// console.log("Google pays $" + google + " per hour.");
// var googleHrs = Number(prompt('How many hours did you work for Google?'));
// console.log("You worked " + googleHrs + " Google hours this week! Wow!");
//
// var amazon = Number(prompt('How much does Amazon pay per hour of work?'));
// console.log("Amazon pays $" + amazon + " per hour.");
// var amazonHrs = Number(prompt('How many hours did you work for Amazon?'));
// console.log("You worked " + amazonHrs + " Amazon hours this week! Wow!");
//
// var facebook = Number(prompt('How much does Facebook pay per hour of work?'));
// console.log("Facebook pays $" + facebook + " per hour.");
// var facebookHrs = Number(prompt('How many hours did you work for Facebook?'));
// console.log("You worked " + facebookHrs + " FB hours this week! Wow!");
//
// var howMuchGet = (google * googleHrs) + (amazon * amazonHrs) + (facebook * facebookHrs);
// alert("You will receive $" + howMuchGet + " this week! Holy Guacamole! $.$");
// console.log("You will receive $" + howMuchGet + " this week.");
//
//
// //A student can be enrolled in a class only if the class is not full
// //and the class schedule does not conflict with her current schedule.
// var classFull = confirm('Is the class you are trying to enroll in full?');
// if(classFull == false) {
//     var noConflict = confirm('Does the class conflict with your schedule?');
// }
//
// if ((classFull == false) && (noConflict == false)) {
//     alert("You're enrolled!");
// }
// else {
//     alert("You're not enrolled!");
// }


//A product offer can be applied only if a person buys more than 2 items,
//and the offer has not expired. Premium members do not need to buy
//a specific amount of products.
var moreThan2 = confirm("Are you buying more than 2 items today?");
if (moreThan2 == false) {
    var premium = confirm("Are you a Premium member?");
}
var offerExpired = confirm("Is the offer expired?");

if ((moreThan2 == true || premium == true) && (offerExpired == false)) {
    alert("Congrats you can use the product offer! :D");
}
else {
    alert("Darn! You can NOT use the product offer. :'(")
}