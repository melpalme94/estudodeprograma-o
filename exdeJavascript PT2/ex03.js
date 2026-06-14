/* 
3. Número Par ou Ímpar

Crie um programa que receba um número e informe se ele é par ou ímpar.

Objetivo: Praticar operadores matemáticos e estruturas de decisão.

*/

// Solicita ao usuário que insira um número

const numero = 7;

// Verifica se o número é par ou ímpar usando o operador de módulo  e estruturas de decisão

if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");

}else if (numero % 2 === 0) {
    console.log("O número " + numero + " é par.");

}else {
    console.log("O número " + numero + " é ímpar.");
}