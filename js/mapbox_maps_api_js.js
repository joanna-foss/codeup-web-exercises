"use strict"

// let start = [-98.7088, 29.4914]; //Yum Thai
// let end = [-88.93682, 30.4030]; //R&C Korean
// let isAtStart = true;

let accessToken = mapboxAPIKey;
mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/outdoors-v11',
	center: [-90.96, -0.47],
	pitch: 50,
	zoom: 3
});

let arrayOfFavs = [
	{
		name: "R&C Korean",
		LngLat: [-88.93682, 30.4030],
		addy: "1670 Pass Rd, Biloxi, MS 39531",
		info: "A Korean restaurant"
	},
	{
		name: "Yum Thai",
		LngLat: [-98.7088, 29.4914],
		addy: "5511 W Loop 1604 N, San Antonio, TX 78253",
		info: "A Thai restaurant"
	},
	{
		name: "Sucre",
		LngLat: [-90.085249, 29.924802],
		addy: "3025 Magazine St, New Orleans, LA 70115",
		info: "A sweet place"
	}
]

//Markers button!!!
document.getElementById('markers').addEventListener('click', function(){
	arrayOfFavs.forEach(function (elem) {
		let pop = new mapboxgl.Popup(elem.name).setHTML("<h1>" + elem.name + "</h1>" + "<br>" + elem.addy + "<br>" + elem.info);
		new mapboxgl.Marker({"color": 'pink'}).setLngLat(elem.LngLat).addTo(map).setPopup(pop);
	});

	geocode("Shreveport", mapboxAPIKey).then(function(data) {
		map.flyTo({center: data, zoom: 3});
	});
});

//Yum Thai button!!!
document.getElementById('yumThai').addEventListener('click', function(){
	geocode("5511 W Loop 1604 N, San Antonio, TX 78253", mapboxAPIKey).then(function(data){
		map.flyTo({center: data, zoom: 15});
	});
});

//Sucre button!!!
document.getElementById('sucre').addEventListener('click', function(){
	geocode("3025 Magazine St, New Orleans, LA 70115", mapboxAPIKey).then(function(data){
		console.log(data);
		map.flyTo({center: data, zoom: 15});
	});
});

//R&C Korean button!!!
document.getElementById('rcKorean').addEventListener('click', function(){
	geocode("1670 Pass Rd, Biloxi, MS 39531", mapboxAPIKey).then(function(data){
		console.log(data);
		map.flyTo({center: data, zoom: 15});
	});
});

// 	document.getElementById('fly').addEventListener('click', () => {
// 		const target = function(){
// 			if (isAtStart){
// 				return end;
// 			} return start;
// 		}
//
// 		isAtStart = !isAtStart;
//
// 		map.flyTo({
// // These options control the ending camera position: centered at
// // the target, at zoom level 9, and north up.
// 			center: target,
// 			zoom: 9,
// 			bearing: 0,
//
// // These options control the flight curve, making it move
// // slowly and zoom out almost completely before starting
// // to pan.
// 			speed: 0.2, // make the flying slow
// 			curve: 1, // change the speed at which it zooms out
//
// // This can be any easing function: it takes a number between
// // 0 and 1 and returns another number between 0 and 1.
// 			easing: (t) => t,
//
// // this animation is considered essential with respect to prefers-reduced-motion
// 			essential: true
// 		});
// 	})