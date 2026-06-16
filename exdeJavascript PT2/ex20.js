/*
20. Jogo de Pedra, Papel e Tesoura

Crie um programa em que o usuário escolhe pedra, papel ou tesoura e joga contra o computador.

Objetivo: Combinar variáveis, condições e geração de escolhas aleatórias.
*/

let escolhaUsuario = "pedra";

function jogarPedraPapelTesoura(escolhaUsuario) {
    const opcoes = ["pedra", "papel", "tesoura"];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    console.log(`Você escolheu: ${escolhaUsuario}`);
    console.log(`O computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuario === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        console.log("Você ganhou!");
    } else {
        console.log("O computador ganhou!");
    }
}

jogarPedraPapelTesoura(escolhaUsuario);