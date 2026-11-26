import test from "node:test";
import assert from "node:assert/strict";
import { matrizConfusao, metricasBinarias } from "../labs/ia/12-metricas.js";

test("conta VP, FP, VN e FN e calcula métricas", () => {
  const matriz = matrizConfusao(
    ["sim", "sim", "não", "não"],
    ["sim", "não", "sim", "não"],
    "sim", "não"
  );
  assert.deepEqual(matriz, { vp: 1, fp: 1, vn: 1, fn: 1 });
  assert.deepEqual(metricasBinarias(matriz), {
    acuracia: 0.5, precisao: 0.5, revocacao: 0.5, f1: 0.5,
  });
});

test("não divide por zero quando não há positivos previstos", () => {
  const matriz = matrizConfusao(["sim", "não"], ["não", "não"], "sim", "não");
  assert.equal(metricasBinarias(matriz).precisao, 0);
  assert.equal(metricasBinarias(matriz).f1, 0);
});

test("rejeita classes inesperadas e matriz vazia", () => {
  assert.throws(() => matrizConfusao(["talvez"], ["sim"], "sim", "não"), TypeError);
  assert.throws(() => metricasBinarias({ vp: 0, fp: 0, vn: 0, fn: 0 }), TypeError);
});
