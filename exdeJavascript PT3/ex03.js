/*
    3. Tabuada

    Solicite um número e exiba a tabuada de multiplicação dele, de 1 a 10, utilizando um laço for.

*/

// Solicita o número ao usuário

let numero = 30

// Exibe a tabuada utilizando o laço for
if (isNaN(numero)) {
    console.log("Valor inválido.Por Favor, digite um numero.")

}else {
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero *i}`);
    }
}