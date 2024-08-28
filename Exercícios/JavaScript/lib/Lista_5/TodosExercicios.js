function separarPalavras(text, separador) {
	return text.split(separador);
}

console.log(superSplit("O rato roeu a roupa do rei de Roma", " "));   
console.log(superSplit("João,Maria,José", ","));     
console.log(superSplit("user1@gmail.com;user2@yahoo.com;user3@outlook.com", ";"));   
console.log(superSplit("João,Maria,José", ","));   
console.log(superSplit("Nome -- Sobrenome -- Idade -- País", " -- "));     
console.log(superSplit("/usr/local/bin", "/"));    
console.log(superSplit("JavaScript", ""));   
console.log(superSplit("O sol está brilhando. O céu está azul. É um ótimo dia!", ". "));  
console.log(superSplit("15/08/2024", "/"));  
console.log(superSplit("14:35:20", ":"));    
console.log(superSplit("Primeira linha\nSegunda linha\nTerceira linha", "\n"));   
console.log(superSplit("Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore.", "\n"));
console.log(superSplit("Linha única sem quebras", "\n"));
console.log(superSplit("Primeira linha de um texto.\n Segunda linha usando template strings.\n Terceira linha com mais detalhes.", "\n"));
console.log(superSplit("Lorem ipsum dolor sit amet,\n consectetur adipiscing elit.\n Ut enim ad minim veniam.", "\n"));
console.log(superSplit("Texto com linhas múltiplas e\n uso de templates strings\n para separação.", "\n"))