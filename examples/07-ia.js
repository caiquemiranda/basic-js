import { normalizarMinMax } from "../src/math.js";
import { classificarKNN, ajustarRegressaoLinear, frequenciaTermos } from "../src/ai.js";

console.log("Escala de idades:", normalizarMinMax([18, 30, 60]));

// Cada par de valores representa duas características já colocadas em escalas comparáveis.
const frutas = [
  { valores: [0.1, 0.2], rotulo: "maçã" },
  { valores: [0.2, 0.3], rotulo: "maçã" },
  { valores: [0.8, 0.9], rotulo: "banana" },
  { valores: [0.9, 0.8], rotulo: "banana" },
];
console.log("k-NN:", classificarKNN(frutas, [0.15, 0.25], 3));

const modelo = ajustarRegressaoLinear([[1, 2], [2, 4], [3, 6]]);
console.log("Reta:", { inclinacao: modelo.inclinacao, intercepto: modelo.intercepto });
console.log("Previsão para x=4:", modelo.prever(4));

console.log("Termos:", [...frequenciaTermos("JS ajuda a estudar IA. IA usa dados em JS.")]);
