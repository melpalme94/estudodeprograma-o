/*
18. Contagem de Letras

Crie um programa que conte quantas vezes uma determinada letra aparece em uma palavra ou frase.

Objetivo: Trabalhar com strings e busca de caracteres.
*/
contarLetras("Brasil Vai ser Hexa", "a"); // Deve retornar 1

function contarLetras(frase, letra) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === letra.toLowerCase())
            contador++;
    }
    return contador;
}
console.log(contarLetras("Brasil Vai ser Hexa", "a")); // Deve retornar 3

