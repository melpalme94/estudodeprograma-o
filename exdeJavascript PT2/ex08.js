/*
8. Contador de Vogais

Crie um programa que receba uma palavra ou frase e conte quantas vogais ela possui.

Objetivo: Trabalhar com textos, laços de repetição e condições.

*/
const texto = "Exemplo de frase para contar vogais";
const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (vogais.includes(letra)) {
        contador++;

    }
}
console.log(`Número de vogais em "${texto}": ${contador}`);