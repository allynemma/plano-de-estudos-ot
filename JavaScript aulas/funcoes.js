//FUNÇÃO QUE ESCREVE O NOME

function sayMyName (name) { //diferente do C, no JS é apenas function, a de
    console.log('My name is', name); //com "," dá espaço entre a str e o argumento, com "+" não
    return name;
}

// veja se você é maior de idade:
function verificarIdade (idade) {
    nome = sayMyName ('Allyne');
    if (idade >= 18) {
        console.log(nome +', você é maior de idade');
    }
    else {
        console.log(nome +', você é menor de idade');
    }
}
//chama função e diz a idade:
verificarIdade(15);