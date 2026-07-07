/*
    Desafio 10 — Sequência de números pares
    
    Exiba os primeiros N números pares (começando do 2), sendo N definido pelo usuário.
    Raciocínio do problema
    Esse desafio é mais direto que os anteriores — a ideia é gerar uma sequência de números pares em ordem crescente, parando quando atingir a quantidade desejada.
    Você já tem todos os elementos necessários para resolvê-lo — não há nenhum conceito novo aqui.
    Dicas:

    Declare o valor de N, por exemplo const n = 10;.
    Declare uma variável para o número par atual, iniciada em 2.
    Use um laço for que repita exatamente N vezes.
    A cada iteração, exiba o número par atual e avance para o próximo par — basta somar 2 ao valor atual.

    Atenção: pense em como avançar para o próximo par dentro do laço. O operador que você precisa é o mesmo usado no fatorial e no contador — mas, em vez de ++ (que soma 1), você vai precisar somar 2. Já viu esse operador em versões anteriores dos desafios.
*/

const n = 20;
let numeroParAtual = 6;

for (let i = 0; i<n; i++) {
    console.log(numeroParAtual);
    numeroParAtual +=2; 
}