import test from "node:test";
import assert from "node:assert/strict";
import { agruparPor, contarPor } from "../labs/fundamentos/04-agrupamento.js";

const pessoas = [
  { nome: "Ana", cidade: "Recife" },
  { nome: "Bia", cidade: "São Paulo" },
  { nome: "Caio", cidade: "Recife" },
];

test("agrupa mantendo ordem e dados originais", () => {
  const grupos = agruparPor(pessoas, (pessoa) => pessoa.cidade);
  assert.deepEqual(grupos.get("Recife").map((pessoa) => pessoa.nome), ["Ana", "Caio"]);
  assert.equal(grupos.get("São Paulo")[0], pessoas[1]);
  assert.equal(pessoas.length, 3);
});

test("conta por chave sem colisão de nomes de propriedades", () => {
  const grupos = contarPor(["toString", "x", "toString"], (valor) => valor);
  assert.equal(grupos.get("toString"), 2);
  assert.equal(grupos.get("x"), 1);
});

test("agrupamento valida argumentos", () => {
  assert.throws(() => agruparPor({}, (x) => x), TypeError);
  assert.throws(() => contarPor([], null), TypeError);
});
