import test from "node:test";
import assert from "node:assert/strict";
import { lerNota } from "../labs/fundamentos/01-entrada.js";

test("lê decimais com vírgula ou ponto sem perder limites", () => {
  assert.equal(lerNota(" 7,5 "), 7.5);
  assert.equal(lerNota(".5"), 0.5);
  assert.equal(lerNota("10"), 10);
  assert.equal(lerNota("0"), 0);
});

test("rejeita entrada vazia, notação inesperada e fora do intervalo", () => {
  for (const valor of ["", " ", "abc", "2x", "1,2.3", "-1", "1e2"]) {
    assert.throws(() => lerNota(valor), TypeError);
  }
  assert.throws(() => lerNota("10,1"), RangeError);
  assert.throws(() => lerNota(7), TypeError);
});
