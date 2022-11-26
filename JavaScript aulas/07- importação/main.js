
const {gets, print} = require('./funcoesAuxiliares');
/*1) 
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1-100.
    Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado
    Exemplo:
    Entrada:
            5
            50
            10
            98
            23

    Saída:
            98
            */

  
const qntdDeAlunos = gets();
let maiorValor = 0;
for (let index = 0; index < qntdDeAlunos; index++) {
    const numeroSorteado = gets();
    if (numeroSorteado> maiorValor) {
        maiorValor = numeroSorteado;
    }
}
print(maiorValor);