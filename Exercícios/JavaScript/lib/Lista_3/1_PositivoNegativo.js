function postivoNegativo(N) {
  let resposta;
  if (N > 0) {
    resposta = "Positivo";
  } else {
    if (N < 0) {
      resposta = "Negativo";
    } else {
      if (N == 0) {
        resposta = "Zero";
      }
    }
  }
  return resposta;
}

console.log(postivoNegativo(5));
console.log(postivoNegativo(-3));
console.log(postivoNegativo(0));
console.log(postivoNegativo("1110"));
console.log(postivoNegativo("-987654321"));