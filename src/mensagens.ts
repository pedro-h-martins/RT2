export default class Mensagens {
    public opcoesCalc = () => {
        console.log('É possível:');
        console.log('Somar, subtrair, dividir, potencializar e radicalizar');
    };

    public usoCalc = () => {
        console.log('\nPara usar, digite os números e a opção de cálculo, separado por espaço. Exemplo: 1.1 + 1 Soma');
        console.log('O resultado será a soma dos números que dará: 2.1');
        console.log('Para fechar o programa, digite "Sair"\n');
    };

    public boasVindas = () => {
        console.log('\nBem vindo!\n');
    };
};