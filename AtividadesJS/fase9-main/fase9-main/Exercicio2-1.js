const readline = require('readline-sync');

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberSet = new Set();
while (numberSet.size < 10) {
    const numeroAleatorio = gerarNumeroAleatorio(1, 50);
    numberSet.add(numeroAleatorio);
}

console.log("Conjunto inicial de números: ", Array.from(numberSet).join(", "));

const userInput = parseInt(readline.question("Digite um número inteiro: "), 10);

if (numberSet.has(userInput)) {
    console.log(`O número ${userInput} foi encontrado!`);
} else {
    console.log(`O número ${userInput} não foi encontrado!`);
}
