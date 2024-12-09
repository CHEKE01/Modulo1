const readline = require('readline-sync');

let cores = [];

console.log("Digite 5 cores:");
for (let contador = 0; contador < 5; contador++) {
    let cor = readline.question(`Cor ${contador + 1}: `);
    cores.push(cor);
}

console.log("\nCores adicionadas:");
cores.forEach(cor => console.log(cor));

cores.sort();

console.log("\nCores ordenadas em ordem crescente:");
cores.forEach(cor => console.log(cor));
