function addOne(x) {
  return x + 1;
}

function pipe (num) {
	let res = num;
	for (let i = 1; i < arguments.length; i++) {
		res = arguments[i](res);
	}
	return res;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
