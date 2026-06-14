/*
4. Maior Número

Crie um programa que receba dois números e informe qual deles é o maior.

Objetivo: Trabalhar comparações e condições.

*/

// Função para comparar dois números e retornar o maior

const numero1 = 5;
const numero2 = 10;

const maiorNumero = encontrarMaiorNumero(numero1, numero2);
console.log(`O maior número entre ${numero1} e ${numero2} é: ${maiorNumero}`);

function encontrarMaiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1;

    }else if (num2 > num1) {
        return num2;
    }
}
