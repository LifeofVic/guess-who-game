console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomPersonSelected = '';


function onReady() {
	console.log('We are in Jquery! 🙏');

	randomPerson(); //checks if there is a random name console.log at each page refreshed. 
}


function render() {
	for (person of people) {
		$('.workArea').append(`
		<div id="${person.name}">
		
		<img src="https://github.com/${person.githubUsername}.png?size=250" atl= "Profile picture of ${person.name}">
		
		</div>
		`)
	}


}

function randomPerson(min = 0, max = 6) {
	let index = Math.floor(Math.random() * (1 + max - min) + min);

	randomPersonSelected = people[index].name;

	console.log('The name of the selectedRandomPerson is: ', randomPersonSelected);
}


