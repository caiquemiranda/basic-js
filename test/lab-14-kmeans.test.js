import test from "node:test";
import assert from "node:assert/strict";
import { agruparKMeans } from "../labs/ia/14-kmeans.js";

test("separa dois grupos simples e calcula seus centros", () => {
  const pontos = [[0, 0], [10, 10], [0, 2], [10, 12]];
  const resultado = agruparKMeans(pontos, 2);
  assert.deepEqual(resultado.grupos, [0, 1, 0, 1]);
  assert.deepEqual(resultado.centros, [[0, 1], [10, 11]]);
  assert.deepEqual(pontos[0], [0, 0]);
});

test("k=1 calcula a média de todos os pontos", () => {
  assert.deepEqual(agruparKMeans([[0], [2], [4]], 1).centros, [[2]]);
});

test("rejeita dimensão inconsistente e k maior que pontos distintos", () => {
  assert.throws(() => agruparKMeans([[0], [1, 2]], 2), TypeError);
  assert.throws(() => agruparKMeans([[0], [0]], 2), RangeError);
});
