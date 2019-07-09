let list = {
	numOfAttempt: 3,
	sum: 100,
	prize: 0,
	maxRandom: 8,
	nextLevelIncrease: 4,
	two: 2
}


while (confirm('Do you want to play a game?')) {
	do {
		let possiblePrize = list.sum;
		let number = Math.floor(Math.random() * list.maxRandom) + 1;
		console.log(number);
		let attempts = 3;
		for (; attempts > 0; attempts--) {
			let choice = +prompt(' Choose a roulette pocket number from 0 to ' + list.maxRandom +
				' \n Attempts left: ' + attempts + '\n Total prize: ' + list.prize +
				'$ \n Possible prize on current attempt: ' + possiblePrize + '$');
			if (choice === number) {
				list.prize += possiblePrize;
				list.maxRandom += list.nextLevelIncrease;
				list.sum *= list.two;
				break;
			}
			possiblePrize /= list.two;
		}
		if (attempts < 1) {
			alert(`Thank you for your participation. Your prize is: ${list.prize}$`);
			break;
		}
	} while (confirm(`Congratulation, you won! Your prize is: ${list.prize}$. Do you want to continue?`));
}
alert('You did not become a billionaire, but can.');
