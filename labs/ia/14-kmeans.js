function validarPontos(pontos) {
  return Array.isArray(pontos) && pontos.length > 0 &&
    Array.isArray(pontos[0]) && pontos[0].length > 0 &&
    pontos.every((ponto) => Array.isArray(ponto) && ponto.length === pontos[0].length &&
      ponto.every((valor) => typeof valor === "number" && Number.isFinite(valor)));
}

function distanciaQuadrada(a, b) {
  return a.reduce((soma, valor, i) => soma + (valor - b[i]) ** 2, 0);
}

/** Agrupa pontos por k médias, com inicialização determinística distante. */
export function agruparKMeans(pontos, k, maxIteracoes = 30) {
  if (!validarPontos(pontos) || !Number.isInteger(k) || k < 1 || k > pontos.length ||
      !Number.isInteger(maxIteracoes) || maxIteracoes < 1) {
    throw new TypeError("Informe pontos numéricos, k e iterações válidas.");
  }

  let centros = [[...pontos[0]]];
  while (centros.length < k) {
    const candidatos = pontos.map((ponto, indice) => ({
      ponto, indice,
      distancia: Math.min(...centros.map((centro) => distanciaQuadrada(ponto, centro))),
    })).toSorted((a, b) => b.distancia - a.distancia || a.indice - b.indice);
    if (candidatos[0].distancia === 0) throw new RangeError("Há menos pontos distintos do que k.");
    centros.push([...candidatos[0].ponto]);
  }

  let grupos = [];
  for (let iteracao = 0; iteracao < maxIteracoes; iteracao++) {
    grupos = pontos.map((ponto) => {
      let maisProximo = 0;
      for (let i = 1; i < k; i++) {
        if (distanciaQuadrada(ponto, centros[i]) < distanciaQuadrada(ponto, centros[maisProximo])) {
          maisProximo = i;
        }
      }
      return maisProximo;
    });

    const novosCentros = centros.map((centro, grupo) => {
      const membros = pontos.filter((_, indice) => grupos[indice] === grupo);
      if (membros.length === 0) return centro;
      return centro.map((_, dimensao) =>
        membros.reduce((soma, ponto) => soma + ponto[dimensao], 0) / membros.length);
    });
    const iguais = novosCentros.every((centro, i) =>
      centro.every((valor, j) => valor === centros[i][j]));
    centros = novosCentros;
    if (iguais) break;
  }
  return { centros, grupos };
}
