describe('Suite dos testes de raiz quadrada', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Raiz de inteiro com inteiro positivo', function(){
        expect(minhaCalc.raizQuad(625, 3)).toEqual(25);
    });

    it('Raiz de inteiro com inteiro negativo', function(){
        expect(minhaCalc.raizQuad(10, -3)).toEqual(3.16);
    });

    it('Raiz de inteiro com decimal', function(){
        expect(minhaCalc.raizQuad(30.25, 2)).toEqual(5.5);
    });

    it('Raiz de inteiro com decimal negativo', function(){
        expect(minhaCalc.raizQuad(72, 2.5)).toEqual(8.49);
    });

});