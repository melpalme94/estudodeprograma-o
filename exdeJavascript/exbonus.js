/*
Desafio Bônus

Crie uma calculadora simples que faça:

Soma
Subtração
Multiplicação
Divisão

Utilize:

{switch} para escolher a operação.

para escolher a operação.

Esses exercícios cobrem os principais conceitos iniciais de JavaScript: variáveis, operadores, condicionais (if), laços (for) e lógica básica. Depois de conseguir resolver todos sem consultar exemplos, você já terá uma boa base em lógica de programação.
*/

let num1 = 10;
let num2 = 5;
let operacao = "soma";

switch (operacao) {
    case "soma":
        console.log("Resultado da soma: " + (num1 + num2));
        break;
    case "subtracao":
        console.log("Resultado da subtração: " + (num1 - num2));
        break;
    case "multiplicacao":
        console.log("Resultado da multiplicação: " + (num1 * num2));
        break;
    case "divisao":
        if (num2 !== 0) {
            console.log("Resultado da divisão: " + (num1 / num2));
        } else {
            console.log("Erro: Divisão por zero não é permitida.");
        }
}
       
