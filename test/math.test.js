import test from "node:test";
import assert from "node:assert/strict";
import { media, normalizarMinMax } from "../src/math.js";

test("média calcula valores válidos", () => {
  assert.equal(media([7, 8, 9]), 8);
  assert.equal(media([-2, 2]), 0);
});

test("média rejeita lista vazia e valores não numéricos", () => {
  assert.throws(() => media([]), TypeError);
  assert.throws(() => media([1, "2"]), TypeError);
  assert.throws(() => media([1, Infinity]), TypeError);
});

test("normalização conserva a escala de zero a um", () => {
  assert.deepEqual(normalizarMinMax([10, 20, 30]), [0, 0.5, 1]);
  assert.deepEqual(normalizarMinMax([5, 5]), [0, 0]);
});

test("normalização rejeita entrada inválida", () => {
  assert.throws(() => normalizarMinMax([]), TypeError);
  assert.throws(() => normalizarMinMax([1, NaN]), TypeError);
});

test("normalização lida com uma lista grande sem espalhar argumentos", () => {
  const valores = Array.from({ length: 100_000 }, (_, indice) => indice);
  const resultado = normalizarMinMax(valores);
  assert.equal(resultado[0], 0);
  assert.equal(resultado.at(-1), 1);
});
