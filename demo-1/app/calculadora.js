/**
 * 
 * Arquivo: calculadora.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por executar as 4 operações: + - * /
 * Data: 07/03/2018
 * 
 */

'use strict';

module.exports = {
    //Função responsável por adicionar 2 números:
    adicionar: function(num1, num2) {
        return num1 + num2;
    },

    //Função responsável por subtrair 2 números:
    subtrair: function(num1, num2) {
        return num1 - num2;
    },

    //Função responsável por multiplicar 2 números:
    multiplicar: function(num1, num2) {
        return num1 * num2;
    },

    //Função responsável por dividir 2 números:
    dividir: function(num1, num2) {
        return num1 / num2;
    }
}