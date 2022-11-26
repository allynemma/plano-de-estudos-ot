//CONTEUDO = CONDICIONAIS
/*
const numero = 5;
const numeroPar= numero % 2 == 0;
console.log(numeroPar);
if (numeroPar) {
    console.log ('Par');
}else {
    console.log ('Impar');
} */

//DESAFIO: CALCULAR O VALOR DE UMA VIAGEM
const precoGasolina = 5.16;
const precoEtanol = 4.39;
const LporKm = 11.76;
const distancia = 80;
const tipoDeGasolina = 'etanol';
let resultado;

if (tipoDeGasolina) {  //antes estava redundante, estava fazendo a comparação
    resultado = (distancia/LporKm)*precoEtanol;
} else {
    resultado = (distancia/LporKm)*precoGasolina;
}

console.log (resultado.toFixed(2));
