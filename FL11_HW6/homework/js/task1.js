let a1 = +prompt('x for point a1', '');
let a2 = +prompt('y for point a2', '');
let b1 = +prompt('x for point b1', '');
let b2 = +prompt('y for point b2', '');
let c1 = +prompt('x for point c1', '');
let c2 = +prompt('y for point c2', '');

let num = 2;

let middlePoint = (a1 + b1) / num === c1 && (a2 + b2) / num === c2 ? console.log(true) : console.log(false);
