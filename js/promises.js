// fetch('https://api.github.com/users/joanna-foss/events', {
// 	method: 'GET',
// 	headers: {'Authorization': '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'}})
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
		headers: {'Authorization': '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'}
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

}