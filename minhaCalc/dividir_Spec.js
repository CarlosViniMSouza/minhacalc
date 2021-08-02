describe('Suite de testes da funcionalidade dividir da minha calculadora', function(){

	var minhaCalc = require('src/js/minhaCalc.js');

	it('Deve dividir dois numeros interios, 60 e 10, e retornar 6', function(){
		expect(minhaCalc.dividir(60, 10)).toEqual(6);
	});

	it('Deve dividir dois numeros de ponto flutuante, 3 e 1.5, e retornar 4.5', function(){
		expect(minhaCalc.dividir(4.5, 1.5)).toEqual(3);
	});

	it('Deve dividir dois numeros de ponto flutuante, 15.55, 5, e retornar 3.11', function(){		
        expect(minhaCalc.dividir(15.55, 5)).toEqual(3.11);
	});
});