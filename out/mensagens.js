"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagens {
    constructor() {
        this.opcoesCalc = () => {
            console.log('É possível:');
            console.log('Somar, subtrair, dividir, potencializar e radicalizar');
        };
        this.usoCalc = () => {
            console.log('\nPara usar, digite os números e a opção de cálculo, separado por espaço. Exemplo: 1.1 + 1 Soma');
            console.log('O resultado será a soma dos números que dará: 2.1');
            console.log('Para fechar o programa, digite "Sair"\n');
        };
        this.boasVindas = () => {
            console.log('\nBem vindo!\n');
        };
    }
}
exports.default = Mensagens;
;
