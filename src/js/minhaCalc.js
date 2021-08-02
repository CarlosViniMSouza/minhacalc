var minhaCalc = {

	somar: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 + n2;

		return Math.round(resultado*100) / 100;
	},

	subtrair: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 - n2;

		return Math.round(resultado*100) / 100;
	},

    multiplicar: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 * n2;

		return Math.round(resultado*100) / 100;
	},

    dividir: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 / n2;

		return Math.round(resultado*100) / 100;
	},

	exponenciacao: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);

		var resultado = n1 ** n2;

		return Math.round(resultado*100) / 100;
	},

	raizQuad: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		
		resultado = Math.sqrt(n1);

		return Math.round(resultado*100) / 100;;
	},

	raizCub: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		
		resultado = Math.cbrt(n1);

		return Math.round(resultado*100) / 100;;
	},

	fatorial: function(n1, n2){
		n1 = parseFloat(n1);
		n2 = parseFloat(n2);
		let fat = 1;

		if (n1 > 1){
        	for (i = 1; i <= n1; i++) {
				fat = fat * i;
			}
			return fat
		}
		return NaN;

	}

}

// usado na função 'require' do NodeJS
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = minhaCalc;
}