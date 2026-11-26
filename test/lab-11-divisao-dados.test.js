import test from "node:test";
import assert from "node:assert/strict";
import { dividirDados } from "../labs/ia/11-divisao-dados.js";

test("mesma semente gera mesma divisão sem perder amostras", () => {
  const dados = Array.from({ length: 10 }, (_, id) => ({ id }));
  const primeira = dividirDados(dados, 0.3, 42);
  const segunda = dividirDados(dados, 0.3, 42);
  assert.deepEqual(primeira, segunda);
  assert.equal(primeira.teste.length, 3);
  assert.equal(primeira.treino.length, 7);
  assert.deepEqual([...primeira.treino, ...primeira.teste].map((x) => x.id).toSorted(),
    dados.map((x) => x.id).toSorted());
  assert.deepEqual(dados.map((x) => x.id), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("mantém treino e teste não vazios e valida proporção", () => {
  const resultado = dividirDados([1, 2], 0.99);
  assert.equal(resultado.treino.length, 1);
  assert.equal(resultado.teste.length, 1);
  assert.throws(() => dividirDados([1], 0.2), TypeError);
  assert.throws(() => dividirDados([1, 2], 1), TypeError);
});
