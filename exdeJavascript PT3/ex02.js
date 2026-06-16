/* 
2. Maior de três números

Dadas três variáveis numéricas, identifique e exiba qual delas possui o maior valor.

*/

const num1 = 8
const num2 = 5
const num3 = 2

if (num1 >= num2 && num1 >= num3) {
    console.log("O Maior Numero e:", num1)

}else if (num2 >= num1 && num2 >= num3 ){
    console.log("O maior número é:", num2);
} else {
    console.log("O maior número é:", num3);
}