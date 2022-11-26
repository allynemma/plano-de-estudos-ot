const {gets, print} = require('./funcoesAuxiliares');
/* 
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12

*/
const qntd = gets();
let numpares;

for (let index = 0; index < qntd; index++) {
    const numeros = gets();
    if (numeros % 2 === 0) {
        print (numeros);
    }
}
