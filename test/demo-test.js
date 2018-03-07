/**
 * Arquivo: app-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'app.js'
 * Data: 07/03/2018
 * 
 * Documentação: http://chaijs.com/guide/styles/#should 
 *               http://chaijs.com/guide/styles/
 * 
 */

const assert = require('chai').assert;
//const olaMundo = require('../demo-2/app/demo').olaMundo;
//const somar = require('../demo-2/app/demo').somar;
const app = require('../demo-2/app/demo');

//Resultados:
olaMundoResultado = app.olaMundo();
somarResultado = app.somar(6,6);

describe('TDD Aplicação Demo 2', () => {
    describe('olaMundo()', () => {
        it('A função "olaMundo" deve retornar uma frase ', () => {
            //let resultado = app.olaMundo();
            assert.equal(olaMundoResultado, 'Olá Pessoal!!');
        });    
        
        it('A função "olaMundo" deve retornar o tipo "string"', () => {
            //let resultado = app.olaMundo();
            assert.typeOf(olaMundoResultado, 'string');
        });    
    });
    describe('somar()', () => {
        it('Função "Somar" deve retornar números abaixo de 6 ', () => {
            //let resultado = app.somar(6,6);
            assert.isAbove(somarResultado, 6);    
        });
    
        it('A função "Somar" deve retornar o tipo "number"', () => {
            //let resultado = app.somar(6,6);
            assert.typeOf(somarResultado, 'number');
        });    
    });   
});