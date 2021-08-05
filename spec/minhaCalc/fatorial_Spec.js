describe('Suite de testes da funcionalidade fatorial da minha calculadora', function(){

	var minhaCalc = require('../../src/js/minhaCalc.js');

	it('fatorial de 6 e deve retornar 720', function(){
		expect(minhaCalc.fatorial(6)).toEqual(720);
	});

	it('fatorial de 4.5, e deve retornar 24', function(){
		expect(minhaCalc.fatorial(4.5)).toEqual(24);
	});

	it('fatorial de -5, e deve retornar "null"', function(){		
        expect(minhaCalc.fatorial(-5)).toEqual(NaN);
	});

	it('fatorial de -6.5, e deve retornar "null"', function(){		
        expect(minhaCalc.fatorial(-6.5)).toEqual(NaN);
	});

});