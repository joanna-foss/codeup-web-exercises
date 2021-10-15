// fetch('https://api.github.com/users/joanna-foss/events', {
// 	method: 'GET',
// 	headers: {'Authorization': ''}})
// 	.then(response => response.json())
// 	.then(data => console.log(data[0].created_at))
// 	.catch(error => console.error(error));
	// .then((results)=>results).then((data)=>{console.log(data)});

//Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// function test(input) {
// 	await octokit.request('GET /users/{username}/events', {
// 		username: 'username'
// 	}).then((results) => {
// 		console.log(results)
// 	});
// }

function lastCommit(userName){
	return fetch(`https://api.github.com/users/${userName}/events`, {
		method: 'GET',
		headers: {'Authorization': ''}
	})
	.then(response => response.json())
	.then(data => {
		return data[0].created_at;
	});
}

console.log(lastCommit('joanna-foss'));
console.log(lastCommit('Dezmonelm'));

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(number){
	return new Promise(resolve=>{
		setTimeout(function(){
			resolve(`You'll see this message after ${number/1000} seconds!`)
		}, `${number}`);
	})
}

wait(1000).then((message)=>console.log(message));
wait(3000).then((message)=>console.log(message));
wait(5000).then((message)=>console.log(message));

//TRISTAN

// const headers = {
// 	// Authorization: "",
// 	Accept: "application/vnd.github.v3+json",
// };
//
// function dateOfLastCommit(username){
// 	return fetch('https://api', {
// 		headers,
// 	}).then((eventRes)=>{
// 		eventRes.json().then((eventJson) => {
// 			//if the request was unsuccessful, throw error
// 			if(!eventRes.ok) throw eventJson;
//
// 			//look for first event that has type "PushEvent"
// 			//Returns undefined if one isn't found.
// 			const lastPush = eventJson.find(event => event.type === "PushEvent");
//
// 			// No PushEvent was found... abort!
// 			if(!lastPush) throw "Could not find last commit!";
//
// 			// #region Technically, this would be *more* correct...
// 			return new Date(lastPush.created_at);
// 		})
// 	})
// }

//And then some but he did not thoroughly explain...