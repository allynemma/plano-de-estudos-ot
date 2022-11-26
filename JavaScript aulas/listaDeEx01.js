/*Fazer um algoritmo para calcular a média das notas de um aluno e clasificar:
Reprovado: <5
Recuperação: entre 5 e 7
Aprovado de semestre: >7
obs: média (nota1 + nota2 + nota3)/3
*/ 
function calcularMedia () {
const nota1 = 5;
const nota2 = 3;
const nota3 = 4;
const media = (nota1 + nota2 + nota3)/3;
console.log ('Média =', media);
return media;
}

function verificaSituaçãoDoAluno () {
const media = calcularMedia();
if (media > 7) {
    console.log('Aluno aprovado.');
} else {
    if (media < 5) {
        console.log('Aluno reprovado');
    } else {
        console.log ('Aluno em recuperação');
    }
}
}

function main() {
    verificaSituaçãoDoAluno();
}

main ();
