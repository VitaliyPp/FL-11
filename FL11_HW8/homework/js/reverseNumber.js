var reverseNumber = function(number) {
	var reversed = 0;
	if (number < 0) {
		let negative = number * (-1);
		while (negative > 0) {
			reversed *= 10;
			reversed += negative % 10;
			negative -= negative % 10;
			negative /= 10;
		}
		return +`-${reversed}`;
	}
	while (number > 0) {
		reversed *= 10;
		reversed += number % 10;
		number -= number % 10;
		number /= 10;
	}
	return reversed;
}

console.log (reverseNumber(123));
console.log (reverseNumber(-456));
console.log (reverseNumber(10000));
