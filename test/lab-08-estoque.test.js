import test from "node:test";
import assert from "node:assert/strict";
import { movimentarEstoque } from "../labs/projetos/08-estoque.js";

test("registra entrada e saída mantendo histórico imutável", () => {
  const original = [{ id: "A", quantidade: 5 }, { id: "B", quantidade: 2 }];
  const entrada = movimentarEstoque(original, "A", 3);
  const saida = movimentarEstoque(entrada, "A", -4);
  assert.equal(original[0].quantidade, 5);
  assert.equal(entrada[0].quantidade, 8);
  assert.equal(saida[0].quantidade, 4);
  assert.equal(saida[1], original[1]);
});

test("impede estoque negativo, IDs ausentes e duplicados", () => {
  const inventario = [{ id: "A", quantidade: 1 }];
  assert.throws(() => movimentarEstoque(inventario, "A", -2), RangeError);
  assert.throws(() => movimentarEstoque(inventario, "B", 1), RangeError);
  assert.throws(() => movimentarEstoque([...inventario, ...inventario], "A", 1), RangeError);
});
