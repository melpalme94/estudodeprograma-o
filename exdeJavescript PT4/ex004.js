/*
Desafio 4 — Contar números pares e ímpares em um array
Dado um array de números, conte quantos são pares e quantos são ímpares, exibindo os dois totais.
Raciocínio do problema
Esse desafio combina conceitos que você já domina bem:

Percorrer um array com for (desafio 2).
Verificar se um número é par com % (desafio 4 do conjunto anterior).
Usar contadores acumuladores (desafio 9 do conjunto anterior).

Dicas:

Declare um array de números para testar, por exemplo const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];.
Declare duas variáveis contadoras, pares e impares, ambas iniciadas em 0.
Percorra o array com um laço for.
Dentro do laço, verifique se o elemento atual é par (% 2 === 0) — se for, incremente pares; caso contrário, incremente impares.
Após o laço, exiba os dois totais.

*/

const numero =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let pares = 0;
let impares = 0;

for (let i = 0; i < numero.length; i ++) {

    if (numero[i] % 2 === 0){
        pares++

    } else {
        impares++;
    }
    
}

console.log("Total de numeros pares:", pares);
console.log("Total de numeros impares:", impares);