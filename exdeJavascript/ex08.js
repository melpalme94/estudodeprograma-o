/*
    8. Contar Vogais

    Conte quantas vogais existem em uma palavra.
*/

let palavra = "javascript";
let vogais = ["a", "e", "i", "o", "u"];
let contador = 0;


for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
        contador++;
    }
}

console.log(`A palavra "${palavra}" tem ${contador} vogais.`);