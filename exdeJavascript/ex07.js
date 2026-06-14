/*
7. Média de Três Notas

Calcule a média de três notas.

Extra: Mostre "Aprovado" se a média for maior ou igual a 7.
*/

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media);

if (media >= 7) {
    console.log("Aprovado");

} else {
    console.log("Reprovado");
}