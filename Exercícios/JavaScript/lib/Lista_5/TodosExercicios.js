function separarPalavras(text, separador) {
	return text.split(separador);
}
console.log(separarPalavras("O rato roeu a roupa do rei de Roma", " "));
console.log(separarPalavras("Luís,Fernanda,Marcos", ","));
console.log(separarPalavras("user1@gmail.com;user2@yahoo.com;user3@outlook.com", ";"));
console.log(separarPalavras("Nome -- Sobrenome -- Idade -- País", " -- "));
console.log(separarPalavras("/home/user/documents", "/"));
console.log(separarPalavras("Eu gosto de programar", ""));
console.log(separarPalavras("Programar é divertido. Pratique todos os dias.", ". "));
console.log(separarPalavras("15/07/2005", "/"));
console.log(separarPalavras("14:35:20", ":"));
console.log(separarPalavras("Primeira linha\nSegunda linha\nTerceira linha", "\n"));
console.log(separarPalavras("",));
console.log(separarPalavras("",));