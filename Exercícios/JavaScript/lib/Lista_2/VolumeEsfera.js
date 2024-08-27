function esfera(numero) {
	let volume = (4/3) * 3.14159 * numero ** 3;
	let volumeA = volume.toFixed(4);
	return volumeA;
}
let c1 = esfera(3)
console.log(c1)
let c2 = esfera(5)
console.log(c2)
let c3 = esfera(1.5)
console.log(c3)