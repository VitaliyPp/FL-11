let getMin = (...num) => {
	let min = num[0];
	for (let i = 0; i < num.length; i++) {
		if (num[i] < min) {
			min = num[i];
		}
	}
	return min;
};

console.log(getMin(3, 0, -3));
