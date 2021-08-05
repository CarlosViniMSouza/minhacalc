describe('Suite dos testes de raiz quadrada', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Raiz quadrada de inteiro positivo', function(){
        expect(minhaCalc.raizQuad(625, 3)).toEqual(25);
    });

    it('Raiz quadrada de inteiro negativo', function(){
        expect(minhaCalc.raizQuad(10, -3)).toEqual(3.16);
    });

    it('Raiz quadrada de decimal', function(){
        expect(minhaCalc.raizQuad(30.25, 2)).toEqual(5.5);
    });

    it('Raiz quadrada de decimal negativo', function(){
        expect(minhaCalc.raizQuad(-50.4, 2.5)).toEqual(NaN);
    });

});