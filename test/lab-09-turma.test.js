import test from "node:test";
import assert from "node:assert/strict";
import { relatorioTurma } from "../labs/projetos/09-turma.js";

test("ordena boletim e calcula resultado da turma", () => {
  const turma = [
    { nome: "Bia", notas: [8, 10] },
    { nome: "Ana", notas: [4, 6] },
    { nome: "Caio", notas: [7, 7] },
  ];
  const relatorio = relatorioTurma(turma);
  assert.deepEqual(relatorio.boletim.map((item) => item.nome), ["Bia", "Caio", "Ana"]);
  assert.equal(relatorio.boletim[2].situacao, "recuperação");
  assert.equal(relatorio.mediaTurma, 7);
  assert.equal(relatorio.aprovados, 2);
  assert.deepEqual(turma[0].notas, [8, 10]);
});

test("rejeita notas e nomes inválidos", () => {
  assert.throws(() => relatorioTurma([]), TypeError);
  assert.throws(() => relatorioTurma([{ nome: " ", notas: [8] }]), TypeError);
  assert.throws(() => relatorioTurma([{ nome: "Ana", notas: [11] }]), TypeError);
});
