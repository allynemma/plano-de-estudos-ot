const {gets, print} = require('./funcoesAuxiliares');
/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90 
*/
//const qntd = gets();
const numeros = [];
let maiorNum = 0;
let menorNum = 1000;
for (let index = 0; index < 5; index++) {
    numeros.push(gets());
}
print (numeros);
for (let index = 0; index < numeros.length; index++) {
    if (numeros [index]> maiorNum) {
        maiorNum = numeros [index];
    }
    if (numeros[index]<menorNum) {
        menorNum = numeros[index];
    }
}
print(maiorNum);
print(menorNum);