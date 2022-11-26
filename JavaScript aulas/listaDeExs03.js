/* Calcular o que deve ser pago por um produto, considerando preço normal da etiqueta e condições de pgmt:
1- à vista, no débito = 10% de desconto
2- à vista no dinheiro oou pix = 15% de desconto
3- em duas vezes= preço da etiqueta
4- +2 vezes= preço da etiqueta + 10% de juros*/


const etiqueta = 30;
const condicoesDePgmt = 1;

function aplicarDesconto (etiqueta, desconto) {
    const resultado = etiqueta*desconto;
    console.log(resultado);
}

function verificarValorFinal (condicoesDePgmt) {
    let desconto;
if (condicoesDePgmt == '1') { //pode fazer o calculo no proprio consele.log, dentro de cada condicão
    desconto = 0.90;
} else {
    if (condicoesDePgmt == '2') {
        desconto = 0.85;
    } else {
        if (condicoesDePgmt == '3') {
            desconto = 1;
        }
        else {
            desconto = 1.1;
        }
    }
}
aplicarDesconto(etiqueta, desconto)
}

function main() {
verificarValorFinal(condicoesDePgmt);
}

main();