/* 
7. Média de Notas

Crie um programa que receba três notas, calcule a média e informe se o aluno foi aprovado ou reprovado.

Objetivo: Combinar cálculos matemáticos com estruturas condicionais.
*/

const nota1 = 8;
const nota2 = 7;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`Média: ${media.toFixed(2)} - Aprovado`);
} else {
    console.log(`Média: ${media.toFixed(2)} - Reprovado`);
}