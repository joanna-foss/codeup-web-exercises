"use strict";

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openweathermapAPIKey,
    // q:     "San Antonio, US", //q, id, and lat&long are interchangeable
    // id: 4726206, //q, id, and lat&long are interchangeable
    lat: 29.4230, //q, id, and lat&long are interchangeable
    lon: -98.49, //q, id, and lat&long are interchangeable
    units: "imperial" //without this, standard temperature type is Kelvin; use "imperial" for F and "metric" for C
}).done(function(data){ //do this first to see the shape of the data
    console.log(data); //and so you can determine what you'll need to do to use it
});