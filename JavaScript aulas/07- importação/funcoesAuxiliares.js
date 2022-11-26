const entradaexemplo = [
    5,
    50,
    10,
    98,
    23
];

const entradaex1 = 2;

const entradaex2 = [4,100,150,90,200];

const entradaex3 = [5,1,3,9,10,12];
let i =0;
const entrada = entradaex3;
function gets () {
    const valor = entrada[i];
    i = i+ 1;
    return valor;
}

function print (texto) {
    console.log(texto);
}

module.exports = {gets, print};