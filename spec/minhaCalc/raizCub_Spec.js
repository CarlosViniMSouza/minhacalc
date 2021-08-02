describe('Suite dos testes de raiz cubica', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Raiz de inteiro com inteiro positivo', function(){
        expect(minhaCalc.raizCub(125, 3)).toEqual(5);
    });

    it('Raiz de inteiro com inteiro negativo', function(){
        expect(minhaCalc.raizCub(10, -3)).toEqual(2.15);
    });

    it('Raiz de inteiro com decimal', function(){
        expect(minhaCalc.raizCub(30.25, 2.5)).toEqual(3.12);
    });

    it('Raiz de inteiro com zero', function(){
        expect(minhaCalc.raizCub(72, 0)).toEqual(4.16);
    });

});