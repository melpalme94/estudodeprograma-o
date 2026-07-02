/*
Desafio 7 — Tabela de multiplicação completa
Utilizando dois laços for aninhados (um dentro do outro), exiba a tabuada de 1 a 5 multiplicada por 1 a 5.
Raciocínio do problema
Laços aninhados são dois laços for, onde o laço interno é executado completamente a cada iteração do laço externo. É como uma tabela: o laço externo controla as linhas e o laço interno controla as colunas.
Por exemplo, com a tabuada de 1 a 3:
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
O laço externo avançou 3 vezes (1, 2, 3), e para cada valor, o laço interno também percorreu 3 vezes (1, 2, 3) — totalizando 9 linhas no console.
Dicas:

O laço externo controla o primeiro número da multiplicação — vai de 1 a 5.
O laço interno controla o segundo número — também vai de 1 a 5.
Dentro do laço interno, exiba a operação com um template literal.
Cada laço tem sua própria variável de controle — convenção comum é usar i para o externo e j para o interno.

*/

for (let i = 1; i <= 5; i++){
    for (let j = 1; j <= 5; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}