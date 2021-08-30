"use strict";

//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//key:value pairs are properties
//property = key:value
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = {
    name: "Bexar",
    countySeat: "San Antonio",
    currentPop: 2004000
}

//console.log(myCounty);

var myDog = {
    name: "Fenix",
    age: 11,
    breed: "Pembroke Welsh Corgi"
}

//console.log(myDog);myDog

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

/*
We can call the 'constructor' for an object and use it to create our objects.
These are the two ways to create an object:
The object constructor is {}  <--object literal notation
let myObject1 = new Object(); <--object instantiation
*/

//More often, we'll use this object literal notation structure as shown above and below:


//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)

let myCar = new Object();
//console.log(myCar);

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

// Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.make = "Chevy";

// Or array notation:

// myCar["model"] = "Silverado";

//In general, dot notation is preferred of the two notations

//We can also set up our objects and properties/methods during object creation:

// let sigOtherCar = {
//        make: "Honda",
//        model: "Fit",
//        year: "2019"
//     }


// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.

myCar.make = "Toyota",
myCar.model = "Prius C",
myCar.year = "2013"

//console.log(myCar);

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties

//Let's share some information about our cars :)

//alert("Hey y'all. I own a " + myCar.year + " " + myCar.make + " " + myCar.model + ".");

//We can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

let myCarYear = myCar.year;

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?

//Now we could do something like this. . a list of those features in the console

// TODO: Add an array of features that your vehicle has!

myCar.features = ["Cruise Control", "Climate Control", "Automatic Locks"];

//console.log(myCar);

// for (let i = 0; i <= myCar.features.length - 1; i++) {
//     console.log(myCar.features[i]);
//     };

//I already added an array of features above in the lecture, so I'm good to go.

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?
//Let's try nesting this object inside of our car object we've been building out

// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

// myCar.carOwner = {
//     firstName: "Joanna",
//     middleName: "\"The Boss\"",
//     lastName: "Foss",
//     age: 190,
//     zipCode: 12345,
//     phoneNum: 5550101234
// };

// console.log("The owner of the car is " + myCar.carOwner.firstName + " " + myCar.carOwner.middleName + " " + myCar.carOwner.lastName + ".");

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

/*
property: num
property: "string"
property: function() {....} <--NOTE: no function name!
 */

let turnMyCarOn = function() {
    alert("Putting the key in the ignition and fired up the " + this.make + " " + this.model);
};


let sigOtherCar = {
       make: "Honda",
       model: "Fit",
       year: "2019",
       turnOn: turnMyCarOn
    }


myCar.carOwner = {
    firstName: "Joanna",
    middleName: "\"The Boss\"",
    lastName: "Foss",
    age: 190,
    zipCode: 12345,
    phoneNum: 5550101234,
    turnOn: turnMyCarOn
};

//Option A:
// myCar.turnOn = turnMyCarOn;
// sigOtherCar.turnOn = turnMyCarOn;

//Option B:
myCar.turnOn = function() {
    alert("Putting the key in the ignition and fired up the " + this.make + " " + this.model);
};

myCar.turnOn();

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

var theGarage = [myCar, sigOtherCar]

//Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles

theGarage.forEach(function (car) {
    car.turnOn();
});

//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results


//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!

let garage = [];
let myCar2 = {
    make: "Tonka",
    model: "Truck",
    year: "2021",
    features: ["Sturdy Plastic Exterior", "Affordable Tires", "Efficient Gas Mileage"],
    carOwner: {
        firstName: "G",
        middleName: "N\/A",
        lastName: "S",
    turnOn: turnMyCarOn
    }
};
// You inadvertently created an array of key:value pairs for your 'garage' array which is something you CAN do but likely should not and will not be doing in the future.
// garage.car1 = myCar;
// garage.car2 = sigOtherCar;
// garage.car3 = myCar2;

garage.push(myCar, sigOtherCar, myCar2);

//console.log(garage);

garage.forEach(function (car) {
    console.log(car.year + " " + car.make + " " + car.model + ".");
});

//these notes look yucky. fix me please.