/*
5. Tabuada

Crie um programa que receba um número e mostre a tabuada desse número de 1 até 10.

Objetivo: Praticar estruturas de repetição.

*/

// Função para exibir a tabuada de um número

const numero = 7;
console.log(`Tabuada do ${numero}:`);
exibirTabuada(numero);

function exibirTabuada(num) {
    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        console.log(`${num} x ${i} = ${resultado}`);
    }
}