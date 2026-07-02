/*
    Desafio 8 — Capitalizar a primeira letra
    Receba uma frase e exiba uma versão com a primeira letra de cada palavra em maiúscula (por exemplo, "bom dia" se torna "Bom Dia").
    Raciocínio do problema
    A estratégia mais direta é dividir a frase em palavras, transformar a primeira letra de cada palavra em maiúscula, e depois juntar tudo novamente.
    Você já conhece os métodos necessários para isso — todos apareceram nos desafios anteriores:

    .split(" ") — divide a string em um array de palavras, quebrando nos espaços.
    .toUpperCase() — converte um caractere para maiúscula.
    .join(" ") — junta o array de palavras de volta em uma string.

    A novidade: acessar partes de uma string
    Para capitalizar apenas a primeira letra de uma palavra, você vai precisar de dois métodos novos:

    palavra[0] — acessa o primeiro caractere (você já usou isso no contador de vogais).
    .slice(1) — retorna a string a partir do índice 1 até o final, ou seja, tudo exceto o primeiro caractere. Por exemplo:

    javascript"banana".slice(1) // retorna "anana"
    Combinando os dois:
    javascriptpalavra[0].toUpperCase() + palavra.slice(1).toLowerCase()
    Isso pega a primeira letra, converte para maiúscula, e concatena com o restante da palavra em minúscula.
    Dicas para estruturar:

    Declare a frase, por exemplo const frase = "bom dia a todos";.
    Divida em palavras com .split(" ").
    Percorra o array de palavras com um laço for.
    A cada iteração, capitalize a primeira letra da palavra atual.
    Junte tudo novamente com .join(" ") e exiba o resultado.
*/

const frase = "bom dia a todos";
const palavras = frase.split(" ");

for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1).toLowerCase();
}
const fraseCapitalizada = palavras.join(" ");

console.log(fraseCapitalizada); // Saída: "Bom Dia A Todos"


