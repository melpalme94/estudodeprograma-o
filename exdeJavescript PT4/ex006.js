/*
    Desafio 6 — Soma de dígitosDesafio 6 — Soma de dígitos
    Receba um número inteiro e calcule a soma de todos os seus dígitos individualmente (por exemplo, 123 resulta em 1 + 2 + 3 = 6).
    Raciocínio do problema
    Assim como no desafio de inverter o número, a estratégia mais direta é tratar o número como string para acessar cada dígito individualmente. A diferença aqui é que, em vez de inverter, você vai percorrer cada caractere e somá-los.

    Dicas:

        1.Declare o número a testar, por exemplo const numero = 123;.

        2.Converta o número para string com .toString(), para poder percorrê-lo caractere por caractere.

        3.Declare uma variável acumuladora let soma = 0;.

        4.Use um laço for para percorrer cada caractere da string.

        5.A cada iteração, converta o caractere atual de volta para número com parseInt() e some-o ao acumulador — sem essa conversão, o + faria concatenação de strings em vez de soma numérica.

        6.Após o laço, exiba o resultado.

*/

const  numero = 1234;

const numeroString = numero.toString();

let soma = 0;

for (let i = 0; i < numeroString.length; i++){
    soma += parseInt(numeroString[i]);

}

console.log("A soma dos dígitos é:", soma); 