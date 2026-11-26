import test from "node:test";
import assert from "node:assert/strict";
import { avaliarQuiz } from "../labs/projetos/10-quiz.js";

const questoes = [
  { id: "q1", alternativas: ["let", "var"], correta: "let" },
  { id: "q2", alternativas: ["Map", "Array"], correta: "Map" },
];

test("corrige respostas e marca questão não respondida", () => {
  const resultado = avaliarQuiz(questoes, { q1: "let" });
  assert.equal(resultado.pontos, 1);
  assert.equal(resultado.total, 2);
  assert.deepEqual(resultado.detalhes, [
    { id: "q1", resposta: "let", correta: true },
    { id: "q2", resposta: null, correta: false },
  ]);
});

test("IDs especiais não usam propriedades herdadas", () => {
  const especial = [{ id: "toString", alternativas: ["a", "b"], correta: "a" }];
  assert.equal(avaliarQuiz(especial, {}).pontos, 0);
});

test("não aceita questões repetidas ou sem gabarito válido", () => {
  assert.throws(() => avaliarQuiz([...questoes, questoes[0]], {}), TypeError);
  assert.throws(() => avaliarQuiz([{ id: "x", alternativas: ["a", "b"], correta: "c" }], {}), TypeError);
});
