describe('Suite de testes da funcionalidade fatorial da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Deve fatorial dois numeros interios, 60 e 10, e retornar 6', function(){
		expect(minhaCalc.fatorial(6)).toEqual(720);
	});

	it('Deve fatorial dois numeros de ponto flutuante, 3 e 1.5, e retornar 4.5', function(){
		expect(minhaCalc.fatorial(4.5)).toEqual(24);
	});

	it('Deve fatorial dois numeros de ponto flutuante, 15.55, 5, e retornar 3.11', function(){		
        expect(minhaCalc.fatorial(-5)).toEqual(NaN);
	});

	it('Deve fatorial dois numeros de ponto flutuante, 15.5 e 2, e retornar 31.0', function(){		
        expect(minhaCalc.fatorial(-6.5)).toEqual(NaN);
	});

});