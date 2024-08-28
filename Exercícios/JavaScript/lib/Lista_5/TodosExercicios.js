function separarPalavras(text, separador) {
	return text.split(separador);
}

console.log(separarPalavras("O rato roeu a roupa do rei de Roma", " "));   
console.log(separarPalavras("João,Maria,José", ","));     
console.log(separarPalavras("user1@gmail.com;user2@yahoo.com;user3@outlook.com", ";"));   
console.log(separarPalavras("João,Maria,José", ","));   
console.log(separarPalavras("Nome -- Sobrenome -- Idade -- País", " -- "));     
console.log(separarPalavras("/usr/local/bin", "/"));    
console.log(separarPalavras("JavaScript", ""));   
console.log(separarPalavras("O sol está brilhando. O céu está azul. É um ótimo dia!", ". "));  
console.log(separarPalavras("15/08/2024", "/"));  
console.log(separarPalavras("14:35:20", ":"));    
console.log(separarPalavras("Primeira linha\nSegunda linha\nTerceira linha", "\n"));   
console.log(separarPalavras("Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.", "\n"));
console.log(separarPalavras("Linha única sem quebras", "\n"));
console.log(separarPalavras("Primeira linha de um texto.\n Segunda linha usando template strings.\n Terceira linha com mais detalhes.", "\n"));
console.log(separarPalavras("Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Ut enim ad minim veniam.", "\n"));
console.log(separarPalavras("Texto com linhas múltiplas e\n uso de templates strings\n para separação.", "\n"))