import * as readline from 'readline-sync';
import { Queue } from './queue';

const filaClientes = new Queue<string>();

function exibirMenu(): void {
    console.log("\n=== MENU ===");
    console.log("1: Adicionar um ou mais Clientes na fila");
    console.log("2: Listar todos os Clientes na fila");
    console.log("3: Chamar (retirar) uma pessoa da fila");
    console.log("4: Remover um cliente específico do meio da fila");
    console.log("5: Passar um cliente para a frente da fila");
    console.log("0: Finalizar o programa");
}

function adicionarClientes(): void {
    const nomes = readline.question("Digite o(s) nome(s) do(s) cliente(s), separados por vírgulas: ");
    const listaNomes = nomes.split(',').map(nome => nome.trim()).filter(nome => nome.length > 0);

    if (listaNomes.length === 0) {
        console.log("Nenhum nome válido foi inserido.");
    } else {
        listaNomes.forEach(nome => filaClientes.enqueue(nome));
        console.log(`Cliente(s) adicionado(s) à fila: ${listaNomes.join(', ')}`);
    }
}

function listarClientes(): void {
    if (filaClientes.isEmpty()) {
        console.log("A fila está vazia.");
    } else {
        console.log("Clientes na fila:");
        filaClientes.printQueue();
    }
}

function chamarCliente(): void {
    const clienteChamado = filaClientes.dequeue();
    if (clienteChamado) {
        console.log(`Cliente chamado: ${clienteChamado}`);
    } else {
        console.log("Nenhum cliente na fila para chamar.");
    }
}

function removerClienteEspecifico(): void {
    if (filaClientes.isEmpty()) {
        console.log("A fila está vazia.");
        return;
    }

    const nome = readline.question("Digite o nome do cliente a ser removido: ");

    if (filaClientes.contains(nome)) {
        const novaFila = new Queue<string>();
        while (!filaClientes.isEmpty()) {
            const cliente = filaClientes.dequeue();
            if (cliente !== nome) {
                novaFila.enqueue(cliente as string);
            }
        }

        while (!novaFila.isEmpty()) {
            filaClientes.enqueue(novaFila.dequeue() as string);
        }

        console.log(`Cliente '${nome}' removido da fila.`);
    } else {
        console.log(`Cliente '${nome}' não encontrado na fila.`);
    }
}

function passarClienteParaFrente(): void {
    if (filaClientes.isEmpty()) {
        console.log("A fila está vazia.");
        return;
    }

    const nome = readline.question("Digite o nome do cliente que deve ir para a frente da fila: ");

    if (filaClientes.contains(nome)) {
        const novaFila = new Queue<string>();
        novaFila.enqueue(nome);

        while (!filaClientes.isEmpty()) {
            const cliente = filaClientes.dequeue();
            if (cliente !== nome) {
                novaFila.enqueue(cliente as string);
            }
        }

        while (!novaFila.isEmpty()) {
            filaClientes.enqueue(novaFila.dequeue() as string);
        }

        console.log(`Cliente '${nome}' movido para a frente da fila.`);
    } else {
        console.log(`Cliente '${nome}' não encontrado na fila.`);
    }
}

function executarPrograma(): void {
    let opcao: number;

    do {
        exibirMenu();
        opcao = readline.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                adicionarClientes();
                break;
            case 2:
                listarClientes();
                break;
            case 3:
                chamarCliente();
                break;
            case 4:
                removerClienteEspecifico();
                break;
            case 5:
                passarClienteParaFrente();
                break;
            case 0:
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

executarPrograma();
