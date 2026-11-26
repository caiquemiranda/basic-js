import test from "node:test";
import assert from "node:assert/strict";
import { resumirNumeros } from "../labs/fundamentos/02-estatisticas.js";

test("resume uma amostra de tamanho ímpar e conserva a entrada", () => {
  const valores = [9, 1, 5];
  assert.deepEqual(resumirNumeros(valores), {
    quantidade: 3, minimo: 1, maximo: 9, media: 5, mediana: 5,
  });
  assert.deepEqual(valores, [9, 1, 5]);
});

test("mediana par usa os dois valores centrais", () => {
  assert.equal(resumirNumeros([10, 2, 8, 4]).mediana, 6);
  assert.equal(resumirNumeros([-2]).media, -2);
});

test("não aceita dados ausentes ou não finitos", () => {
  assert.throws(() => resumirNumeros([]), TypeError);
  assert.throws(() => resumirNumeros([1, Infinity]), TypeError);
});
