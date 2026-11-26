/** Conta resultados de classificação binária em duas classes explícitas. */
export function matrizConfusao(reais, previstos, positiva, negativa) {
  if (!Array.isArray(reais) || !Array.isArray(previstos) ||
      reais.length === 0 || reais.length !== previstos.length ||
      typeof positiva !== "string" || typeof negativa !== "string" ||
      !positiva || !negativa || positiva === negativa) {
    throw new TypeError("Informe rótulos reais, previstos e duas classes distintas.");
  }
  const classes = new Set([positiva, negativa]);
  if ([...reais, ...previstos].some((rotulo) => !classes.has(rotulo))) {
    throw new TypeError("Há rótulo fora das classes informadas.");
  }
  const matriz = { vp: 0, fp: 0, vn: 0, fn: 0 };
  for (let i = 0; i < reais.length; i++) {
    if (reais[i] === positiva && previstos[i] === positiva) matriz.vp++;
    else if (reais[i] === negativa && previstos[i] === positiva) matriz.fp++;
    else if (reais[i] === negativa && previstos[i] === negativa) matriz.vn++;
    else matriz.fn++;
  }
  return matriz;
}

export function metricasBinarias(matriz) {
  const { vp, fp, vn, fn } = matriz ?? {};
  if ([vp, fp, vn, fn].some((n) => !Number.isInteger(n) || n < 0) ||
      vp + fp + vn + fn === 0) {
    throw new TypeError("Informe uma matriz de contagens não negativas.");
  }
  const divisao = (numerador, denominador) => denominador === 0 ? 0 : numerador / denominador;
  const precisao = divisao(vp, vp + fp);
  const revocacao = divisao(vp, vp + fn);
  return {
    acuracia: (vp + vn) / (vp + fp + vn + fn),
    precisao,
    revocacao,
    f1: divisao(2 * precisao * revocacao, precisao + revocacao),
  };
}
