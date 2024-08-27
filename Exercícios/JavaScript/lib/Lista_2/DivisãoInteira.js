function divisaoInteira(a, b) {
	let resto = a % b;
	let total = (a - resto) / b; 
	return total;
}
let c1 = divisao(10, 3)
console.log(c1)
let c2 = divisao(9, 3)
console.log(c2)
let c3 = divisao(9, 2)
console.log(c3)
let c4 = divisao(7, 5)
console.log(c4)
let c5 = divisao(0, 5)
console.log(c5)