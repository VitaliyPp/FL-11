let a = +prompt('enter side A of triangle');
let b = +prompt('enter side B of triangle');
let c = +prompt('enter side C of triangle');

if (a<b+c && b<c+a && c<b+a && a>0 && b>0 && c>0) {
	if (a === b && b === c && c === a) {
		console.log('Eequivalent triangle');
	} else if (a === b || a === c || b === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesn’t exist');
}

