/*
1- Criar uma classe para representar carros.
Os carros possuem uma marca, cor e gasto médio de combustível por km rodado
Crie um método que dado a quantidade de km e preço do combustível nos dê o valor gasto em reais 
para realizar esse percurso
*/

const precoComb = 6.74;
distancia = 80;
class Carro {
    marca;
    cor;
    Kmpor1L;
    constructor (marca, Kmpor1L, cor) {
    this.marca= marca;
    this.Kmpor1L= Kmpor1L;
    this.cor= cor;
    }
    calcularValor (distancia,precoComb) {
        const resultado = (distancia/this.Kmpor1L)*precoComb;
        return resultado;
    }
}

const gol = new Carro ('Wolkiswagen', 11.76, 'Preto');
console.log(gol);
console.log ((gol.calcularValor(80,5.16)).toFixed(2));
const onix = new Carro ('Chevrolet',13.13, 'Branco');
console.log (onix);
console.log((onix.calcularValor(80,5.16)).toFixed(2));