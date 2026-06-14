/*  
9. Fatorial

Crie um programa que receba um número inteiro positivo e calcule seu fatorial.

Objetivo: Desenvolver raciocínio lógico com multiplicações sucessivas.

*/

const numero = 5; // Número para calcular o fatorial
let fatorial = 1;

if (numero < 0) {
    console.log("Fatorial não e definido para números negativos.");
} else if (numero === 0 || numero === 1) {
    console.log(`Fatorial de ${numero} é 1.`);
} else {
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`Fatorial de ${numero} é ${fatorial}.`);
}
