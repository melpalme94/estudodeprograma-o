/*16. Calculadora Simples

Crie uma calculadora que realize soma, subtração, multiplicação e divisão entre dois números.

Objetivo: Integrar operações matemáticas e estruturas de decisão.
*/

let numero1 = 10;
let numero2 = 5;
let operacao = "soma"; // Pode ser "soma", "subtracao", "multiplicacao" ou "divisao"
let resultado;

if (operacao === "soma") {
    resultado = numero1 + numero2;
} else if (operacao === "subtracao") {
    resultado = numero1 - numero2;
} else if (operacao === "multiplicacao") {
    resultado = numero1 * numero2;
} else if (operacao === "divisao") {
    if (numero2 !== 0) {
        resultado = numero1 / numero2;
    } else {
        resultado = "Erro: Divisão por zero não é permitida.";
    }   
}
console.log (`O resultado da ${operacao} entre ${numero1} e ${numero2} é: ${resultado}`);