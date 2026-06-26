/*
    Desafio 5 — Verificador de número primo
    Receba um número e verifique se ele é primo (divisível apenas por 1 e por ele mesmo).
    Raciocínio do problema
    Um número primo é aquele que possui exatamente dois divisores: 1 e ele mesmo. Por exemplo, 7 é primo porque só é divisível por 1 e 7. Já 6 não é primo porque é divisível por 1, 2, 3 e 6.
    A estratégia mais direta é: tentar dividir o número por todos os valores entre 2 e numero - 1. Se qualquer divisão resultar em resto 0, o número não é primo — pode-se parar a verificação imediatamente. Se nenhuma divisão resultar em resto 0, o número é primo.
    Casos especiais a tratar antes do laço:

    Números menores que 2 (0 e 1) não são primos por definição.
    O número 2 é o único primo par.

    Dicas:

    Declare o número a testar, por exemplo const numero = 17;.
    Declare uma variável booleana let ePrimo = true; — ela começa assumindo que o número é primo, e só muda para false se uma divisão exata for encontrada.
    Trate os casos especiais com if antes do laço.
    Use um laço for que vá de 2 até numero - 1, testando numero % i === 0 a cada iteração.
    Se a condição for verdadeira, mude ePrimo para false e interrompa o laço com break (para não continuar verificando desnecessariamente).
    Após o laço, exiba o resultado com base no valor de ePrimo.

*/

const numero = 13;
let ePrimo = true;

if (numero < 2) {
    ePrimo = false;

} else if (numero === 2) {
    ePrimo = true;

} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0){
            ePrimo = false;
            break;
        }
    }
}

if (ePrimo) {
    console.log (`${numero} é um numero primo.`);
} else {
    console.log (`${numero} não é um numero primo.`);
}
