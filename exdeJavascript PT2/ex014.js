/*
14. Maior Número de uma Lista

Crie um programa que encontre o maior valor dentro de uma lista de números.

Objetivo: Aprender a percorrer coleções de dados.

*/

let numeros = [3, 7, 2, 9, 5];
let maiorNumero = numeros[0]; // Inicializa com o primeiro número da lista

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero){
        maiorNumero = numeros[i]; // Atualiza o maior número encontrado
        
    }
}
console.log(maiorNumero)