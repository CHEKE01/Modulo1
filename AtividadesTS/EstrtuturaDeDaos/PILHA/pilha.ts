import * as readline from 'readline-sync';
import { Stack } from './Stack'; 


const livroPilha = new Stack<string>();


function exibirMenu() {
    console.log("\nMenu:");
    console.log("1: Adicionar um novo livro na pilha");
    console.log("2: Listar todos os livros da pilha");
    console.log("3: Retirar um livro da pilha");
    console.log("0: Finalizar o programa");
}


function main() {
    let opcao: number;

    do {
        exibirMenu();
        opcao = readline.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                
                const nomeLivro = readline.question("Digite o nome do livro: ");
                livroPilha.push(nomeLivro);
                console.log(`O livro "${nomeLivro}" foi adicionado à pilha.`);
                break;

            case 2:
                
                if (livroPilha.isEmpty()) {
                    console.log("A pilha está vazia.");
                } else {
                    console.log("Livros na pilha:");
                    livroPilha.printStack();
                }
                break;

            case 3:
               
                const livroRetirado = livroPilha.pop();
                if (livroRetirado) {
                    console.log(`O livro "${livroRetirado}" foi retirado da pilha.`);
                } else {
                    console.log("Não há livros para retirar, a pilha está vazia.");
                }
                break;

            case 0:
                console.log("Programa finalizado.");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

main();
