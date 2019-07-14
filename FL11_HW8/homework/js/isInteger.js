let isInteger = (num) => {
	let result = num - Math.ceil(num);
	if (result === 0) {
		return true;
	}
	return false;
}

console.log(isInteger(5.01));
