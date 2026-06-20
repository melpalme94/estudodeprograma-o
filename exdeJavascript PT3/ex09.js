/*
Desafio 9 — Contador de vogais
Receba uma string e conte quantas vogais ela contém, exibindo o total ao final.
Raciocínio do problema
A ideia central é: percorrer a string caractere por caractere e, para cada um, verificar se ele é uma vogal (a, e, i, o, u). Se for, soma-se 1 a um contador. Ao final do percurso, exibe-se o total.
Isso significa que vamos precisar de três elementos, que já apareceram nos desafios anteriores:

Uma variável contadora, iniciada em 0 (igual à lógica da soma dos pares no desafio 4).
Um laço que percorra cada caractere da string.
Uma verificação condicional, dentro do laço, perguntando "este caractere é uma vogal?".

Como percorrer uma string caractere por caractere
Aqui está a principal novidade deste desafio. Strings em JavaScript podem ser acessadas por índice, de forma parecida com arrays — cada caractere tem uma posição numérica, começando em 0:
*/

const texto ="Abacaxi".toLowerCase();
let contador = 0;
const vogais = ["a", "e", "i", "o", "u"];

for (let i = 0; i <texto.length; i++) {
    if (vogais.includes(texto[i])) {
        contador++;
    }
}

console.log (`A frase contém ${contador} vogais`);