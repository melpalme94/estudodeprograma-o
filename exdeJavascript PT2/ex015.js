/*
15. Verificador de Palíndromo

Crie um programa que verifique se uma palavra é igual quando lida da esquerda para a direita e da direita para a esquerda.

Objetivo: Desenvolver lógica de comparação de caracteres.

*/

verificarPalindromo("arara");
verificarPalindromo("A sogra má e amargosa");

function verificarPalindromo(palavra) {
    // Remover espaços e converter para minúsculas
    const palavraLimpa = palavra.replace(/\s/g, '').toLowerCase();

    // Inverter a palavra
    const palavraInvertida = palavraLimpa.split('').reverse().join('');

    // Verificar se a palavra é igual à sua versão invertida
    if (palavraLimpa === palavraInvertida) {
        console.log (`${palavra} é um palíndromo.`);
    
    } else {
        console.log (`${palavra} não é um palíndromo.`);
    }
}