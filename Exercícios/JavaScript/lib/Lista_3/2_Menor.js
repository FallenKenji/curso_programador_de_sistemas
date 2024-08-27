function obterMenor(a, b, c) {
	let menor;
	if (a < b) {
		menor = a;
	} else {
		menor = b;
	}
	if (c < menor) {
		menor = c;
	}
	return menor;
}

console.log(obterMenor(3, 7, 5));
console.log(obterMenor(-1, -5, -3));
console.log(obterMenor(8, 2, 10));