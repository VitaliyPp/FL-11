let formatTime = (time) => {
	let day = Math.floor(time / 1440);
	let hour = Math.floor( (time - (day * 1440) ) / 60);
	let minute = time - (day * 1440) - (hour * 60);
	return `${day} day(s) ${hour} hour(s) ${minute} minute(s)`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
