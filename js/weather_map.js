"use strict";

// $(document).ready(function(elem){
//     console.log("ready");
// });

let accessToken = mapboxAPIKey;
mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v11',
	center: [-98.49, 29.4230],
	pitch: 50,
	zoom: 10,
});

let defaultCity = {};
let cityDeets = '';
let dayTime = '';

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openweathermapAPIKey,
    // q:     "San Antonio, US", //q, id, and lat&long are interchangeable
    // id: 4726206, //q, id, and lat&long are interchangeable
    lat: 29.4230, //q, id, and lat&long are interchangeable
    lon: -98.49, //q, id, and lat&long are interchangeable
    units: "imperial" //without this, standard temperature type is Kelvin; use "imperial" for F and "metric" for C
}).done(function(data){ //do this first to see the shape of the data
    console.log(data); //and so you can determine what you'll need to do to use it

    defaultCity.lat = data.lat;
    defaultCity.lng = data.lon;
    defaultCity.temp = data.current.temp;
    defaultCity.date = convertToDayTime(data.current.dt);

    reverseGeocode(defaultCity, mapboxAPIKey).then(function(data){
        cityDeets = data;
        console.log(cityDeets);
        $('#city').html('<strong>Your Location</strong>:<br>' + cityDeets);
        $('#time').html('<strong>Today\'s Date</strong>:<br>' + dayTime);
        $('#temp').html('<strong>Today\'s Temperature</strong>: <br>' + defaultCity.temp + ' °F');
    });

});

function convertToDayTime(dt){ //data.current.dt
    let date = new Date(dt*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();

    dayTime = month + ' ' + day + ', ' + year;
}