/**
 * Arquivo: calculadora-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'Calculadora.js'
 * Data: 24/09/2017
 * 
 * Documentação: http://chaijs.com/guide/styles/#assert
 * 
 */

//Usando a sintaxe: Assert (chai)
var chai = require('chai'),
    calculadora = require('../demo-1/app/calculadora'),
    assert = chai.assert;

//Primeiro Teste
describe('TDD de Operações da Calculadora', () => {
    it('Teste: Somar 2 Números', () => {
        //assert.equal(20, 18);  
        //assert.equal(20, 20); 
        assert.equal(calculadora.adicionar(5,5), 10);
    }); 
    
    it('Teste: Subtrair 2 Números', () => {
        assert.equal(calculadora.subtrair(10,5), 5);    
    });

    it('Teste: Multiplicar 2 Números', () => {
        assert.equal(calculadora.multiplicar(10,5), 50);    
    });

    it('Teste: Dividir 2 Números', () => {
        assert.equal(calculadora.dividir(18,2), 9);    
    });

    //Testar o Tipo inserido:
    it('Teste: Tipo de valor', () => {
        assert.typeOf(4, 'number');
    });
});