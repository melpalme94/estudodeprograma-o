/*
Desafio 7 — Fatorial de um número

Calcule o fatorial de um número inteiro positivo utilizando um laço for ou while.
Lembrete sobre o conceito: o fatorial de um número n (representado como n!) é o produto de todos os inteiros positivos de 1 até n. Por exemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120
Caso especial: o fatorial de 0 é definido como 1 (0! = 1).
Algumas dicas para estruturar o raciocínio:

Você vai precisar de uma variável acumuladora — mas, diferente do desafio da soma (onde começava em 0), aqui ela deve começar em 1. Pense no porquê: se começasse em 0, qualquer multiplicação resultaria em 0.
Um laço que percorra os números de 1 até o número desejado.
Dentro do laço, multiplique o acumulador pelo número atual (atenção ao operador correto — não é +=, é o equivalente para multiplicação).

*/

const numero = 8;

let fatorial = 1;

if (numero < 1) {
    console.log("Fatorial não e definido para números negativos.")

} else if (numero === 0 || numero === 1) {
    console.log (`Fatorial de ${numero} é 1.`);

}else {

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log (`Fatorial de ${numero} é ${fatorial}.`);
}
    

    