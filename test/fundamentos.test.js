import test from "node:test";
import assert from "node:assert/strict";
import { situacao } from "../src/fundamentos.js";

test("situação respeita os limites das faixas", () => {
  assert.equal(situacao(0), "reprovado");
  assert.equal(situacao(4.99), "reprovado");
  assert.equal(situacao(5), "recuperação");
  assert.equal(situacao(6.99), "recuperação");
  assert.equal(situacao(7), "aprovado");
  assert.equal(situacao(10), "aprovado");
});

test("situação rejeita notas fora do domínio", () => {
  for (const nota of [-1, 11, NaN, Infinity, "7", null]) {
    assert.equal(situacao(nota), "nota inválida");
  }
});
