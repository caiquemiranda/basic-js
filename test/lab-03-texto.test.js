import test from "node:test";
import assert from "node:assert/strict";
import { contarPalavras, ehPalindromo } from "../labs/fundamentos/03-texto.js";

test("conta palavras com acentos e pontuação", () => {
  const contagem = contarPalavras("Ação, ação! IA.");
  assert.equal(contagem.get("ação"), 2);
  assert.equal(contagem.get("ia"), 1);
  assert.equal(contagem.size, 2);
});

test("palíndromo ignora diacríticos e pontuação", () => {
  assert.equal(ehPalindromo("A grama é amarga"), true);
  assert.equal(ehPalindromo("JavaScript"), false);
  assert.equal(ehPalindromo("!!!"), false);
});

test("funções de texto exigem string", () => {
  assert.throws(() => contarPalavras(null), TypeError);
  assert.throws(() => ehPalindromo(123), TypeError);
});
