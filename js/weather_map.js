"use strict";

let accessToken = mapboxAPIKey;
mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v11',
	center: [-98.489765, 29.426742],
	pitch: 50,
	zoom: 10,
});

let defaultCity = {};
let dayTime = '';

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: openweathermapAPIKey,
    // q:     "San Antonio, US", //q, id, and lat&long are interchangeable
    // id: 4726206, //q, id, and lat&long are interchangeable
    lat: 29.426742, //q, id, and lat&long are interchangeable
    lon: -98.489765, //q, id, and lat&long are interchangeable
    units: "imperial" //without this, standard temperature type is Kelvin; use "imperial" for F and "metric" for C
}).done(function(data){ //do this first to see the shape of the data
    console.log(data); //and so you can determine what you'll need to do to use it

    defaultCity.lat = data.lat;
    defaultCity.lng = data.lon;
    defaultCity.temp = data.current.temp;
    defaultCity.date = convertToDayTime(data.current.dt);

    reverseGeocode(defaultCity, mapboxAPIKey).then(function(data){
        $('#city').html('<strong>Your Location</strong>:<br>' + data);
        $('#date').html('<strong>Today\'s Date</strong>:<br>' + defaultCity.date);
        $('#temp').html('<strong>Current Temperature</strong>: <br>' + parseInt(defaultCity.temp) + ' °F');
        $('.city-coords').html(defaultCity.lat + ', ' + defaultCity.lng);
    });

    for(let i = 1; i <=5; i++){
        let days = ['.day1','.day2','.day3','.day4','.day5'];
        let html =
            '<h6 class="card-header">' + convertToDayTime(data.daily[i].dt) + '</h6>' +
            '<div class=\"card-text p-3\">' + '<strong>High / Low:</strong><br>' + data.daily[i].temp.max + '°F / ' + data.daily[i].temp.min + '°F <br>' + '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png\">' + '</div>' +
            '<div class=\"card-text p-1\"><strong>Description:</strong><br>' + data.daily[i].weather[0].description + '</div>' +
            '<div class=\"card-text p-1\">' + '<strong>Humidity:</strong><br>' + data.daily[i].humidity + ' %</div>' +
            '<div class=\"card-text p-1\">' + '<strong>Wind Speed:</strong><br>' + data.daily[i].wind_speed + '</div>' +
            '<div class=\"card-text p-1\">' + '<strong>Pressure:</strong><br>' + data.daily[i].pressure + '</div>'
        $(days[i-1]).html(html);
    }


});

function convertToDayTime(dt){
    let date = new Date(dt*1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();

    dayTime = month + ' ' + day + ', ' + year;
    return dayTime;
}

map.on('click', function(e){
    let marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map);
});

// function onDrag(){
//
// }

// var marker = new mapboxgl.Marker()
// .setLngLat([-98.4916, 29.4260])
// .addTo(map);
//
// const marker = new mapboxgl.Marker({
// draggable: true
// })
// .setLngLat([0, 0])
// .addTo(map);
//
// function onDragEnd() {
// const lngLat = marker.getLngLat();
// coordinates.style.display = 'block';
// coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
// }
//
// marker.on('dragend', onDragEnd);


//ON CHANGE LOCATION BUTTON CLICK
document.getElementById('new-city-please').addEventListener('click', function(e){
    //4 VARIABLES TO SEARCH
    let streetInput = document.querySelector("#new-city-form input:nth-child(2)").value;
    let cityInput = document.querySelector("#new-city-form input:nth-child(3)").value;
    let stateInput = document.querySelector("#new-city-form input:nth-child(4)").value;
    let newSearch = streetInput + " " + cityInput + " " + stateInput;
    //END VARIABLES

    //PULL CITY DATA FROM MAPBOX
    geocode(newSearch, mapboxAPIKey).then(function(data){
        console.log(data);
        map.flyTo({center: data, zoom: 15}); //zoom into new city
        new mapboxgl.Marker().setLngLat(data).addTo(map); //add new marker to map

        let newDD = {
            lng: data[0],
            lat: data[1],
        }

        console.log(newDD);

        //PULL CITY WEATHER INFO FROM OPEN WEATHER MAP
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: openweathermapAPIKey,
            // q:     "San Antonio, US", //q, id, and lat&long are interchangeable
            // id: 4726206, //q, id, and lat&long are interchangeable
            lat: newDD.lat, //q, id, and lat&long are interchangeable
            lon: newDD.lng, //q, id, and lat&long are interchangeable
            units: "imperial" //without this, standard temperature type is Kelvin; use "imperial" for F and "metric" for C
        }).done(function(data) {
            //POPULATE THE 5 DAY FORECAST CARDS HERE
            for (let i = 1; i <= 5; i++) {
                let days = ['.day1', '.day2', '.day3', '.day4', '.day5'];
                let html =
                    '<h6 class="card-header">' + convertToDayTime(data.daily[i].dt) + '</h6>' +
                    '<div class=\"card-text p-3\">' + '<strong>High / Low:</strong><br>' + data.daily[i].temp.max + '°F / ' + data.daily[i].temp.min + '°F <br>' + '<img src="http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png\">' + '</div>' +
                    '<div class=\"card-text p-1\"><strong>Description:</strong><br>' + data.daily[i].weather[0].description + '</div>' +
                    '<div class=\"card-text p-1\">' + '<strong>Humidity:</strong><br>' + data.daily[i].humidity + ' %</div>' +
                    '<div class=\"card-text p-1\">' + '<strong>Wind Speed:</strong><br>' + data.daily[i].wind_speed + '</div>' +
                    '<div class=\"card-text p-1\">' + '<strong>Pressure:</strong><br>' + data.daily[i].pressure + '</div>'

                $(days[i - 1]).html(html);
            }
        });

        //UPDATE THE BIG BOX & COORDINATES IN HEADER INFORMATION HERE
        reverseGeocode(newDD, mapboxAPIKey).then(function(data){
            console.log(data);
            $('#city').html('<strong>Your Location</strong>:<br>' + data);
            $('#temp').html('<strong>Current Temperature</strong>: <br>' + parseInt(defaultCity.temp) + ' °F');
            $('.city-coords').html(newDD.lat + ', ' + newDD.lng);
        });
    });

});