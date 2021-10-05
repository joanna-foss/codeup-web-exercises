"use strict";

$.ajax("data/blog.json").done(function(data){
	console.log(data);
	for(let i = 0; i < data.length; i++){
		let insertHTML =
			'<h2 class="mt-3 text-center">' + data[i].title.toLowerCase() + '</h2>' +
			'<div class="d-flex text-black-50 justify-content-between">' +
			'<div>' + "date: " + data[i].date.toLowerCase() + '</div>' +
			'<div>' + "categories: " + data[i].categories.join(' || ') + '</div>' +
			'</div>' + //end row
			'<div>' + data[i].content + '</div>'
		$(".posts").append(insertHTML);
	}
});