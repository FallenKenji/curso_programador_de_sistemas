function somaPares(num) {
	let numero = num.filter(value => value % 2 == 0);

	let total = 0;

    for(let i=0; i<numero.length; i++) {
        total += numero[i];
    }

    return total
	}

module.exports = somaPares;