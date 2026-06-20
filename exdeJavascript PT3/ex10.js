/*

Desafio 10 — Classificação de idade
Receba a idade de uma pessoa e classifique-a em "criança" (0-12), "adolescente" (13-17), "adulto" (18-59) ou "idoso" (60+), utilizando estruturas condicionais.
Este é o desafio final do conjunto, e ele revisita um conceito que você já dominou bem nos exercícios anteriores (como no fatorial, no desafio 7): a estrutura if / else if / else.
Raciocínio do problema
A diferença aqui é que, em vez de duas ou três condições, você tem quatro faixas a cobrir. A lógica de testar várias condições em sequência, usando else if, é exatamente a mesma — só estende-se a cadeia.

const idade = 25; // Exemplo de idade

if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if (idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if (idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else if (idade >= 60) {
  console.log("Idoso");
} else {
  console.log("Idade inválida"); // Para casos em que a idade seja negativa, por exemplo
}

*/

const idade = 30;

if (idade >= 0 && idade <= 12) {
    console.log("Criança");

}else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");

}else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");

}else if (idade >= 60) {
    console.log("Idoso");
} else {
  console.log("Idade inválida"); 
}
