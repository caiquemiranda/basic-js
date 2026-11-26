import test from "node:test";
import assert from "node:assert/strict";
import { percorrerArvore } from "../labs/fundamentos/05-arvore.js";

test("percorre árvore em pré-ordem com profundidade", () => {
  const arvore = {
    valor: "raiz",
    filhos: [
      { valor: "A", filhos: [{ valor: "A1", filhos: [] }] },
      { valor: "B", filhos: [] },
    ],
  };
  assert.deepEqual(percorrerArvore(arvore), [
    { valor: "raiz", profundidade: 0 },
    { valor: "A", profundidade: 1 },
    { valor: "A1", profundidade: 2 },
    { valor: "B", profundidade: 1 },
  ]);
});

test("recusa ciclos e formatos inválidos", () => {
  const ciclo = { valor: "x", filhos: [] };
  ciclo.filhos.push(ciclo);
  assert.throws(() => percorrerArvore(ciclo), RangeError);
  assert.throws(() => percorrerArvore({ valor: "x" }), TypeError);
});
