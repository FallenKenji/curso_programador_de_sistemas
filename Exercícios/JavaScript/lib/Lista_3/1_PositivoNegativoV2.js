function postivoNegativo(num) {
	if (num == 0) return "Zero";
	return Number(num) > 0 ? "Positivo" : "Negativo";
}
console.log(postivoNegativo(5));
console.log(postivoNegativo(-3));
console.log(postivoNegativo(0));
console.log(postivoNegativo("1110"));
console.log(postivoNegativo("-987654321"));
