import test from "node:test";
import assert from "node:assert/strict";
import { adicionarTarefa, concluirTarefa, removerTarefa } from "../labs/projetos/06-tarefas.js";

test("cria, conclui e remove sem alterar as versões anteriores", () => {
  const vazia = [];
  const criada = adicionarTarefa(vazia, 1, "  Estudar arrays  ");
  const concluida = concluirTarefa(criada, 1);
  const removida = removerTarefa(concluida, 1);
  assert.deepEqual(vazia, []);
  assert.deepEqual(criada, [{ id: 1, titulo: "Estudar arrays", concluida: false }]);
  assert.equal(concluida[0].concluida, true);
  assert.deepEqual(removida, []);
});

test("não permite IDs repetidos ou tarefas inexistentes", () => {
  const lista = adicionarTarefa([], 1, "Ler");
  assert.throws(() => adicionarTarefa(lista, 1, "Outra"), RangeError);
  assert.throws(() => concluirTarefa(lista, 2), RangeError);
  assert.throws(() => removerTarefa(lista, 2), RangeError);
  assert.throws(() => adicionarTarefa([], 0, "Ler"), TypeError);
});
