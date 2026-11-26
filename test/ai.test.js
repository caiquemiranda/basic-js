import test from "node:test";
import assert from "node:assert/strict";
import {
  distanciaEuclidiana,
  classificarKNN,
  ajustarRegressaoLinear,
  frequenciaTermos,
} from "../src/ai.js";

test("distância euclidiana usa todas as dimensões", () => {
  assert.equal(distanciaEuclidiana([0, 0], [3, 4]), 5);
  assert.equal(distanciaEuclidiana([2], [2]), 0);
  assert.throws(() => distanciaEuclidiana([1], [1, 2]), TypeError);
});

const amostras = [
  { valores: [0, 0], rotulo: "A" },
  { valores: [0.1, 0], rotulo: "A" },
  { valores: [1, 1], rotulo: "B" },
];

test("k-NN usa voto dos vizinhos mais próximos", () => {
  assert.equal(classificarKNN(amostras, [0.05, 0], 3), "A");
  assert.equal(classificarKNN(amostras, [0.9, 0.9], 1), "B");
});

test("k-NN desempata pela menor distância", () => {
  const empate = [
    { valores: [0], rotulo: "longe" },
    { valores: [0.9], rotulo: "perto" },
  ];
  assert.equal(classificarKNN(empate, [1], 2), "perto");
});

test("k-NN rejeita dimensões e k inválidos", () => {
  assert.throws(() => classificarKNN(amostras, [0], 1), TypeError);
  assert.throws(() => classificarKNN(amostras, [0, 0], 4), TypeError);
});

test("regressão ajusta reta e prevê novo valor", () => {
  const modelo = ajustarRegressaoLinear([[1, 2], [2, 4], [3, 6]]);
  assert.equal(modelo.inclinacao, 2);
  assert.equal(modelo.intercepto, 0);
  assert.equal(modelo.prever(4), 8);
  assert.throws(() => modelo.prever("4"), TypeError);
});

test("regressão rejeita conjunto insuficiente ou sem variação em x", () => {
  assert.throws(() => ajustarRegressaoLinear([[1, 2]]), TypeError);
  assert.throws(() => ajustarRegressaoLinear([[1, 2], [1, 3]]), RangeError);
});

test("frequência de termos preserva acentos e ignora pontuação", () => {
  const termos = frequenciaTermos("Ação, ação! IA.");
  assert.equal(termos.get("ação"), 2);
  assert.equal(termos.get("ia"), 1);
  assert.equal(termos.size, 2);
  assert.throws(() => frequenciaTermos(null), TypeError);
});
