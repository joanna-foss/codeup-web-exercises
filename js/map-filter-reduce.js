const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com', //length 15
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com', //length 15
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com', //length 15
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com', //length 19
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com', //length 17
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// console.log(users);

let manyLangs = users.filter(user => user.languages.length >= 3);
// console.log(manyLangs);

let userEmails = users.map(user => user.email);
// console.log(userEmails);

let totalExperience = users.reduce((acc, curr) => {
    return acc += curr.yearsOfExperience;
}, 0);
// console.log(totalExperience);

let avgExp = totalExperience/users.length;
// console.log(avgExp);

// function longestWord(array){
//     let length = 0;
//     let longOnes = [];
//     for(let i=0; i<array.length; i++){
//         if(array[i].length > length) {
//             length = array[i].length;
//             longOnes.push(array[i]);
//         }
//     }
//     return longOnes[longOnes.length-1];
// }

let longestEmail = userEmails.reduce(function(prev, curr){
    if(curr.length > prev.length){
        return curr;
    } else {
        return prev;
    }
}, "");
// console.log(longestEmail);

let theInstructors = users.reduce((prev, curr, ind, arr) => {
        if(arr.indexOf(curr) < arr.length-1){
            prev += curr.name + ", ";
        } else {
            prev += curr.name + ".";
        }
     return prev;}, 'Your instructors are: ');
// console.log(theInstructors);

//BONUS
let theUniqueLangs = users.reduce((prev, curr, ind, arr) => {
        let currLangs = curr.languages;
        for(let i=0; i<currLangs.length; i++){
            console.log(currLangs[i]);
            if (!prev.includes(currLangs[i])){
                prev + currLangs[i];
                console.log(prev);
            }
        }
        return prev
}, '');

console.log(users);
console.log(theUniqueLangs);