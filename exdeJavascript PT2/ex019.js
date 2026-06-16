/*
19. Número Primo

Crie um programa que determine se um número é primo.

Objetivo: Desenvolver raciocínio lógico e uso de divisões.
*/
function ehPrimo(numero){
    if (numero <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0)
            return false;
    }
    return true;
} 
console.log(ehPrimo(7)); // Deve retornar true
console.log(ehPrimo(10)); // Deve retornar false