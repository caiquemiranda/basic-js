import test from "node:test";
import assert from "node:assert/strict";
import { treinarPerceptron } from "../labs/ia/15-perceptron.js";

const portaE = [
  { valores: [0, 0], rotulo: 0 },
  { valores: [0, 1], rotulo: 0 },
  { valores: [1, 0], rotulo: 0 },
  { valores: [1, 1], rotulo: 1 },
];

test("aprende a porta lógica E", () => {
  const modelo = treinarPerceptron(portaE);
  assert.deepEqual(portaE.map((amostra) => modelo.prever(amostra.valores)), [0, 0, 0, 1]);
  assert.equal(modelo.pesos.length, 2);
  assert.equal(portaE[0].rotulo, 0);
});

test("valida dimensões, rótulos e taxa de aprendizado", () => {
  assert.throws(() => treinarPerceptron([{ valores: [1], rotulo: 2 }]), TypeError);
  assert.throws(() => treinarPerceptron(portaE, { taxa: 0 }), TypeError);
  assert.throws(() => treinarPerceptron(portaE).prever([1]), TypeError);
});
