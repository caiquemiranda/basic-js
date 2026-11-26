import test from "node:test";
import assert from "node:assert/strict";
import { adicionarProduto, totalCentavos } from "../labs/projetos/07-carrinho.js";

const livro = { id: "livro", nome: "Livro", precoCentavos: 1990, quantidade: 1 };

test("soma quantidades e calcula em centavos sem mutar entrada", () => {
  const primeiro = adicionarProduto([], livro);
  const segundo = adicionarProduto(primeiro, { ...livro, quantidade: 2 });
  assert.equal(primeiro[0].quantidade, 1);
  assert.equal(segundo[0].quantidade, 3);
  assert.equal(totalCentavos(segundo), 5970);
});

test("rejeita dados inconsistentes e total inseguro", () => {
  const primeiro = adicionarProduto([], livro);
  assert.throws(() => adicionarProduto(primeiro, { ...livro, precoCentavos: 2000 }), RangeError);
  assert.throws(() => adicionarProduto([], { ...livro, quantidade: 0 }), TypeError);
  assert.throws(() => totalCentavos([{ ...livro, quantidade: Number.MAX_SAFE_INTEGER }]), RangeError);
});
