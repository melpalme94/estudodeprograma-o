/*
    Desafio 9 — Contar ocorrências de uma letra
    Receba uma palavra e uma letra específica, e conte quantas vezes essa letra aparece na palavra.
    Raciocínio do problema
    Esse desafio é muito parecido com o contador de vogais do conjunto anterior — a diferença é que, em vez de verificar se o caractere é uma vogal, você vai verificar se ele é igual a uma letra específica.
    Você já tem todos os elementos necessários:

    Percorrer uma string caractere por caractere com for e string.length.
    Comparar caracteres com ===.
    Usar um contador acumulador com ++.
    Padronizar maiúsculas e minúsculas com .toLowerCase().

    Dicas:

    Declare a palavra e a letra a buscar:

    javascript

    const palavra = "abacaxi";
    const letra = "a";

    Declare um contador iniciado em 0.
    Percorra a palavra caractere por caractere.
    A cada iteração, compare o caractere atual com a letra buscada — ambos padronizados com .toLowerCase() para evitar problemas com maiúsculas.
    Se forem iguais, incremente o contador.
    Após o laço, exiba o resultado.
*/

const palavra = "abacaxi";
const letra = "a";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
    }   
}
console.log( `A letra "${letra}" aparece ${contador} vezes na palavra "${palavra}".`); // Saída: A letra "a" aparece 4 vezes na palavra "abacaxi".