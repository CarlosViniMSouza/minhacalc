describe('Suite de testes da funcionalidade dividir da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('Deve dividir dois numeros interios, 60 e 10, e retornar 6', function(){
		expect(minhaCalc.dividir(60, 10)).toEqual(6);
	});

	it('Deve dividir dois numeros de ponto flutuante, 4.5 e 1.5, e retornar 3', function(){
		expect(minhaCalc.dividir(4.5, 1.5)).toEqual(3);
	});

	it('Deve dividir dois numeros de ponto flutuante, 15.55 e 5, e retornar 3.11', function(){		
        expect(minhaCalc.dividir(15.55, 5)).toEqual(3.11);
	});

	it('Deve dividir dois numeros de ponto flutuante, 30.75, e 3, e retornar 10.25', function(){		
        expect(minhaCalc.dividir(30.75, 3)).toEqual(10.25);
	});

});