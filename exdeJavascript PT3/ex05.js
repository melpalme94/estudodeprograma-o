/*

5. Contagem regressiva

Implemente uma contagem regressiva de 10 até 0, exibindo cada número no console com um pequeno intervalo de tempo (pode usar setTimeout ou simplesmente o laço sem o intervalo, se preferir manter simples).

*/

for (let i = 10; i >= 0; i--) {
    setTimeout(() => {
        console.log(i);
    }, (10 - 1) * 1000);
        
}