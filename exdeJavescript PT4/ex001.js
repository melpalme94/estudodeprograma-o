/*
Desafio 1 — Múltiplo de 3 e 5
Receba um número e verifique se ele é múltiplo de 3, de 5, de ambos, ou de nenhum dos dois — exibindo a mensagem correspondente.
Raciocínio do problema
Você já conhece o operador % (módulo) do desafio da soma dos pares — ele retorna o resto de uma divisão. Se o resto for 0, o número é divisível. Por exemplo:
12 % 3 === 0 → 12 é múltiplo de 3
10 % 5 === 0 → 10 é múltiplo de 5
15 % 3 === 0 e 15 % 5 === 0 → 15 é múltiplo de ambos
Dica sobre a ordem das condições
Há quatro cenários possíveis: múltiplo de ambos, só de 3, só de 5, ou de nenhum. Pense bem em qual condição testar primeiro — se você testar "múltiplo de 3" antes de "múltiplo de ambos", o caso do número 15, por exemplo, cairia na condição errada. A condição mais restritiva (que combina as duas verificações com &&) deve vir primeiro.
Tente montar o código e me envie para revisão.

*/
verificarMultiplo (30)


function verificarMultiplo(numero) {

    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log ("É multiplo de 3 e de 5.");

    } else if (numero % 3 === 0) {
        console.log("É multiplo de 3.");

    } else if (numero % 5 === 0) {
        console.log("É multiplo de 5.");

    } else {
        console.log("Não é múltiplo nem de 3 nem de 5.");
    }

}

