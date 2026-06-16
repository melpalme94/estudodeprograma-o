/* 

13. Inverter uma Palavra

Crie um programa que receba uma palavra e exiba essa palavra invertida.

Objetivo: Trabalhar manipulação de strings e laços.

*/

let palavra = "carro"
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

console.log(palavraInvertida)