/*

Desafio 6 — Verificador de palíndromo
Receba uma palavra ou frase e verifique se ela é um palíndromo (lê-se da mesma forma de trás para frente), ignorando espaços e diferenças entre maiúsculas e minúsculas.
Esse desafio é um pouco mais elaborado que os anteriores, pois envolve manipulação de strings. Algumas dicas para te ajudar a estruturar o raciocínio:

Capture a palavra ou frase com prompt().
Padronize o texto antes de comparar — converta tudo para minúsculas (método .toLowerCase()) e remova os espaços (método .replaceAll(" ", "") ou .split(" ").join("")).
Inverta a string padronizada. Strings não possuem um método .reverse() direto (esse método é de arrays), então uma estratégia comum é:

transformar a string em um array de caracteres (.split(""));
inverter o array (.reverse());
juntar novamente em uma string (.join("")).


Compare a string original (já padronizada) com a string invertida. Se forem iguais, é um palíndromo.
*/

const texto = "a base do teto desaba";

const textoCorreto = texto.toLowerCase().replaceAll(" ", "");
const textoInvertido = textoCorreto.split("").reverse().join("");

console.log("Texto padronizado:", textoCorreto);
console.log("Texto invertido:  ", textoInvertido);

if (textoCorreto === textoInvertido) {
    console.log("É um palíndromo");
} else {
    console.log("Não é um palíndromo");
}