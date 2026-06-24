/*
Desafio 2 — Maior e menor de uma lista
Dado um array de números, percorra-o com um laço e identifique o maior e o menor valor, sem usar Math.max() ou Math.min().
Raciocínio do problema
A ideia central é: começar assumindo que o primeiro elemento do array é simultaneamente o maior e o menor valor, e depois percorrer os elementos restantes, atualizando essas variáveis sempre que encontrar um valor maior ou menor do que o registrado até ali.
Por exemplo, com o array [3, 7, 1, 9, 4]:
Começa com maior = 3 e menor = 3
Compara com 7 → 7 > 3 → maior passa a ser 7
Compara com 1 → 1 < 3 → menor passa a ser 1
Compara com 9 → 9 > 7 → maior passa a ser 9
Compara com 4 → nenhuma atualização
Resultado: maior = 9, menor = 1
Dicas:

Declare um array de números para testar, por exemplo const numeros = [3, 7, 1, 9, 4];.
Declare duas variáveis — maior e menor — iniciadas com o primeiro elemento do array (numeros[0]), não com 0. Pense no porquê: se o array contiver apenas números negativos, iniciar com 0 daria um resultado errado.
Use um laço for para percorrer o array a partir do índice 1 (o índice 0 já foi usado para inicializar as variáveis).
Dentro do laço, use dois if separados — um para verificar se o elemento atual é maior que maior, outro para verificar se é menor que menor.*/

const numeros = [3, 7, 1, 9, 4];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++){
    if (numeros[i] > maior) {
        maior = numeros[i];
    }

    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("Maior valor:", maior);
console.log("Menor valor:", menor);