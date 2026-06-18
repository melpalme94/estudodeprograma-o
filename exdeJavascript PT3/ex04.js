/*

4. Soma dos números pares

Calcule a soma de todos os números pares entre 1 e 100 utilizando um laço de repetição.

*/

let soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        soma += i;
    }
}
console.log(soma) 