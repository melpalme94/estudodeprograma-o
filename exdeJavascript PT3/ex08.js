/*

Desafio 8 — Sequência de Fibonacci
Gere os primeiros N números da sequência de Fibonacci, sendo N um valor definido pelo usuário.
Lembrete sobre o conceito: a sequência de Fibonacci começa com 0 e 1, e cada número seguinte é a soma dos dois anteriores:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
Esse desafio é um pouco mais complexo que os anteriores, pois você precisa "lembrar" de dois valores anteriores a cada passo, não apenas um. Algumas dicas para estruturar o raciocínio:

Defina quantos termos você quer gerar (N) — pode ser um valor fixo, por exemplo const n = 10;, para facilitar o teste.
Você vai precisar de duas variáveis para guardar os dois últimos números da sequência (algo como anterior e atual, começando em 0 e 1).
Um laço que repita N vezes.
A cada repetição:

Exiba o número atual.
Calcule o próximo número da sequência, somando os dois anteriores.
"Avance" as variáveis: o que era atual passa a ser anterior, e o novo valor calculado passa a ser atual.

*/