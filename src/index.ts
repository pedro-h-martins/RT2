import * as readline from 'readline';
import Mensagens from "./mensagens";
import Soma from './soma';
import Subtracao from './subtracao';
import Multiplicacao from './multiplicacao';
import Divisao from './divisao';
import Potenciacao from './potenciacao';
import Radiciacao from './radiciacao';

let mensagem = new Mensagens()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Quais os números e a operação a ser realizada?\n`, (valor) => {
        let instrucoes = valor.split(' ')
        let numero1 = Number(instrucoes[0])
        let numero2 = Number(instrucoes[1])
        let operacao = String(instrucoes[2])

        if (instrucoes.length == 1) {
            operacao = instrucoes[0]
        }
        console.log(`Estas foram as instruções: ${instrucoes}\n`)

        let calculo;

        switch (operacao) {
            case 'Somar':
                calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Dividir':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Potenciar':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Radiciar':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;

            case 'Sair':
                console.log('Até!')
                break;

            default:
                console.log('Não compreendi o que quis dizer :/')
        }

        leitor.close()
        if (operacao != 'Sair') {
            mensagem.usoCalc()
            iniciar()
        }
    })
};

mensagem.boasVindas();
mensagem.opcoesCalc();
mensagem.usoCalc();
iniciar();