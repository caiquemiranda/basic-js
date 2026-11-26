import test from "node:test";
import assert from "node:assert/strict";
import { treinarNaiveBayes, classificarTexto } from "../labs/ia/13-naive-bayes.js";

const exemplos = [
  { texto: "ganhe prêmio grátis", rotulo: "spam" },
  { texto: "prêmio grátis hoje", rotulo: "spam" },
  { texto: "reunião amanhã", rotulo: "normal" },
  { texto: "agenda da reunião", rotulo: "normal" },
];

test("aprende sinais simples de duas classes", () => {
  const modelo = treinarNaiveBayes(exemplos);
  assert.equal(classificarTexto(modelo, "ganhe grátis"), "spam");
  assert.equal(classificarTexto(modelo, "AGENDA amanhã"), "normal");
  assert.equal(modelo.totalDocumentos, 4);
});

test("não muda exemplos de treino e aceita termos desconhecidos", () => {
  const modelo = treinarNaiveBayes(exemplos);
  assert.equal(typeof classificarTexto(modelo, "palavra inédita"), "string");
  assert.equal(exemplos[0].texto, "ganhe prêmio grátis");
});

test("exige duas classes e um modelo válido", () => {
  assert.throws(() => treinarNaiveBayes([{ texto: "a", rotulo: "A" }, { texto: "b", rotulo: "A" }]), TypeError);
  assert.throws(() => treinarNaiveBayes([{ texto: "", rotulo: "A" }, { texto: "", rotulo: "B" }]), TypeError);
  assert.throws(() => classificarTexto({}, "texto"), TypeError);
});
