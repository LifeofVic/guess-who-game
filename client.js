console.log('Here are all the available people:', people);

$(document).ready(onReady);


function onReady() {
	console.log('We are in Jquery! 🙏');

	randomPerson(); //checks if there is a random name console.log at each page refreshed. 
}

let randomPerson;

function randomPerson(min = 0, max = 6) {
	let index = Math.floor(Math.random() * (1 + max - min) + min);

	randomPerson = people[index].name;

	console.log('The name of the selectedRandomPerson is: ', randomPerson);


}
