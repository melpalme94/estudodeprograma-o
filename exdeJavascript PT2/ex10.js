/*

10. Adivinhe o Número

Crie um programa em que exista um número secreto. O usuário deve informar um número e o programa deve dizer se acertou ou errou.

Objetivo: Praticar comparação de valores e tomada de decisões.

*/

const numeroSecreto = 7; // Número secreto
const numeroUsuario = 7; // Número informado pelo usuário

if (numeroUsuario === numeroSecreto)
{
    console.log("Parabéns! Você acertou o número secreto.");
} else {
    console.log("Que pena! Você errou. Tente novamente.");  
}