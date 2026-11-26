import { situacao } from "../src/fundamentos.js";

function criarContador(inicio = 0) {
  let valor = inicio;
  return () => ++valor;
}

const proximo = criarContador(10);
console.log("closure:", proximo(), proximo());

for (const nota of [4, 6, 9, -1]) {
  console.log(nota, "=>", situacao(nota));
}

const quadrados = [1, 2, 3].map((numero) => numero ** 2);
console.log("função como argumento:", quadrados);
