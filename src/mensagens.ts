export default class Mensagens {
    public opcoesCalc = () => {
        console.log('É possível:');
        console.log('Somar, subtrair, dividir, potencializar, radiciar e calcular Bhaskara');
    };

    public usoCalc = () => {
        console.log('\nPara usar, digite os números e a opção de cálculo, separado por espaço. Exemplo: 1.1 1 Soma');
        console.log('No qual, o resultado será a soma dos números que dará: 2.1');
        console.log('Para Bhaskara, tem que dar os 3 coeficientes (a, b e c). Exemplo : 4 8 3 Bhaskara');
        console.log(`No qual, as raízes da equação são: -0.5,-1.5\n`)
        console.log('Para fechar o programa, digite "Sair"\n');
    };

    public boasVindas = () => {
        console.log('\nBem vindo!\n');
    };
};