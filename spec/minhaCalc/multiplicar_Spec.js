describe('Suite de testes da funcionalidade multiplicar da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Deve multiplicar dois numeros interios, 2 e 5, e retornar 6', function(){
		expect(minhaCalc.multiplicar(2, 5)).toEqual(10);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 3 e 1.5, e retornar 4.5', function(){
		expect(minhaCalc.multiplicar(3, 1.5)).toEqual(4.5);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 15.5 e 2, e retornar 31.0', function(){		
        expect(minhaCalc.multiplicar(15.5, 2)).toEqual(31);
	});

	it('Deve multiplicar dois numeros de ponto flutuante, 15.5 e 2, e retornar 31.0', function(){		
        expect(minhaCalc.multiplicar(10.25, 3)).toEqual(30.75);
	});

});