/*
17. Sequência de Fibonacci

Crie um programa que mostre os primeiros números da sequência de Fibonacci.

Objetivo: Exercitar lógica de repetição e atualização de valores.

*/

function fibonacci(n) {
    let a = 0, b = 1, temp;
    console.log(a); // Imprime o primeiro número da sequência
    for (let i = 1; i < n; i++) {
        console.log(b); // Imprime o próximo número da sequência
        temp = a = b; // Atualiza 'a' para o valor de 'b'
        b = temp + a; // Atualiza 'b' para a soma de 'temp' e 'a'
    }


}

// Exemplo de uso: Mostrar os primeiros 10 números da sequência de Fibonacci
fibonacci(10);
