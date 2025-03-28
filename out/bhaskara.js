"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo2_1 = __importDefault(require("./calculo2"));
class Bhaskara extends calculo2_1.default {
    calcular(numero1, numero2, numero3) {
        const delta = Math.pow(numero2, 2) - (4 * numero1 * numero3);
        if (delta < 0) {
            throw new Error('Delta negativo. Não possui raízes reais');
        }
        const x1 = (-numero2 + Math.sqrt(delta)) / (2 * numero1);
        const x2 = (-numero2 - Math.sqrt(delta)) / (2 * numero1);
        return [x1, x2];
    }
}
exports.default = Bhaskara;
