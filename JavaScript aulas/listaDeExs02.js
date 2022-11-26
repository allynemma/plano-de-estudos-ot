/*2- Calcular IMC de uma pessoa adulta:

abaixo de 18.5 = abaixo do peso
entre 18.5 e 25= peso normal
entre 25 e 30=acima do peso
entre 30 e 40 = obeso
acima de 40= obesidade grave

Fórmula: IMC = peso/(altura*altura)
*/

function calcularImc () {
const kgs= 48;
const cms= 1.53;
const IMC=kgs/(Math.pow(cms,2)); //usei uma biblioteca
console.log('IMC = ',IMC.toFixed(2));
return IMC;
}

function verificarImc (IMC) {
if(IMC< 18.5) {
    console.log ('Você está abaixo do peso');
} else {
    if (IMC>=18.5 && IMC <25) {
        console.log ('Peso normal');
    } else {
        if (IMC>=25 && IMC<30) {
            console.log('Acima do peso');
        } else {
            if (IMC>= 30 && IMC<40) {
                console.log('Você está obeso');
            }
            else {
                console.log ('Obesidade grave');
            }
        }
    }
}
}

function main () {
    IMC= calcularImc();
    verificarImc(IMC);
}

main ();