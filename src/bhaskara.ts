import Calculo2 from "./calculo2";

export default class Bhaskara extends Calculo2 {
    public calcular(numero1: number, numero2: number, numero3: number): number[] {
        const delta = Math.pow(numero2, 2) - (4 * numero1 * numero3);
        
        if (delta < 0) {
            throw new Error('Delta negativo. Não possui raízes reais');
        }

        const x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
        const x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);

        return [x1, x2];
    }
}