/*
    Desafio 3 — Inverter um número

    Receba um número inteiro e exiba seus dígitos na ordem inversa (por exemplo, 1234 deve se tornar 4321).
    
    Raciocínio do problema
    Strings em JavaScript têm o método .split("").reverse().join("") que você já usou no desafio do palíndromo — e ele funciona perfeitamente aqui também. A diferença é que o valor de entrada é um número, não uma string, então é preciso convertê-lo antes.
    Dicas:

    Declare o número a ser invertido, por exemplo const numero = 1234;.
    Converta o número para string com o método .toString():

    javascriptconst textoDoNumero = numero.toString();

    Aplique a inversão que você já conhece: .split("").reverse().join("").
    Converta o resultado de volta para número com parseInt() — isso elimina automaticamente zeros à esquerda que poderiam aparecer (por exemplo, 1230 invertido seria "0321" como string, mas 321 como número).

    Atenção a um caso especial: o que acontece com números negativos? O sinal de menos (-) seria incluído na inversão, gerando um resultado incorreto. Não é obrigatório tratar esse caso, mas vale pensar a respeito.

*/

const numero = 1234;
const textoNumero = numero.toString();
const numeroInvertidoTexto = textoNumero.split("").reverse().join("");
const numeroInvertido = parseInt(numeroInvertidoTexto);

console.log(numeroInvertido);