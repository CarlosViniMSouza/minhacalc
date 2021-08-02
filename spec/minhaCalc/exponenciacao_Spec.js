describe('Suite dos testes de exponenciacao', function(){
    
    var minhaCalc = require('../../src/js/minhaCalc.js');

    it('Elevar inteiro com inteiro positivo', function(){
        expect(minhaCalc.exponenciacao(5, 3)).toEqual(125);
    });

    it('Elevar inteiro com inteiro negativo', function(){
        expect(minhaCalc.exponenciacao(5, -3)).toEqual(0.01);
    });

    it('Elevar inteiro com decimal', function(){
        expect(minhaCalc.exponenciacao(5.5, 2)).toEqual(30.25);
    });

    it('Elevar inteiro com inteiro positivo', function(){
        expect(minhaCalc.exponenciacao(5.5, 2.5)).toEqual(70.94);
    });

});