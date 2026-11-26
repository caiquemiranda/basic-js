function vetorValido(vetor) {
  return Array.isArray(vetor) && vetor.length > 0 &&
    vetor.every((valor) => typeof valor === "number" && Number.isFinite(valor));
}

export function distanciaEuclidiana(a, b) {
  if (!vetorValido(a) || !vetorValido(b) || a.length !== b.length) {
    throw new TypeError("Os vetores devem ter o mesmo tamanho e conter números finitos.");
  }
  const somaQuadrados = a.reduce((soma, valor, indice) => soma + (valor - b[indice]) ** 2, 0);
  return Math.sqrt(somaQuadrados);
}

export function classificarKNN(amostras, entrada, k = 3) {
  if (!Array.isArray(amostras) || amostras.length === 0 ||
      !vetorValido(entrada) || !Number.isInteger(k) || k < 1 || k > amostras.length) {
    throw new TypeError("Informe amostras, entrada e k válido.");
  }

  const vizinhos = amostras.map((amostra, indice) => {
    if (!amostra || typeof amostra.rotulo !== "string" || amostra.rotulo.length === 0 ||
        !vetorValido(amostra.valores) || amostra.valores.length !== entrada.length) {
      throw new TypeError("Cada amostra precisa de valores numéricos e um rótulo.");
    }
    return {
      rotulo: amostra.rotulo,
      distancia: distanciaEuclidiana(amostra.valores, entrada),
      indice,
    };
  }).sort((a, b) => a.distancia - b.distancia || a.indice - b.indice).slice(0, k);

  const votos = new Map();
  for (const vizinho of vizinhos) {
    const atual = votos.get(vizinho.rotulo) ?? { quantidade: 0, menorDistancia: Infinity };
    atual.quantidade += 1;
    atual.menorDistancia = Math.min(atual.menorDistancia, vizinho.distancia);
    votos.set(vizinho.rotulo, atual);
  }

  return [...votos].sort((a, b) =>
    b[1].quantidade - a[1].quantidade ||
    a[1].menorDistancia - b[1].menorDistancia ||
    a[0].localeCompare(b[0])
  )[0][0];
}

export function ajustarRegressaoLinear(pares) {
  if (!Array.isArray(pares) || pares.length < 2 ||
      pares.some((par) => !Array.isArray(par) || par.length !== 2 ||
        par.some((valor) => typeof valor !== "number" || !Number.isFinite(valor)))) {
    throw new TypeError("Informe pelo menos dois pares [x, y] finitos.");
  }

  const n = pares.length;
  const mediaX = pares.reduce((soma, [x]) => soma + x, 0) / n;
  const mediaY = pares.reduce((soma, [, y]) => soma + y, 0) / n;
  const numerador = pares.reduce((soma, [x, y]) => soma + (x - mediaX) * (y - mediaY), 0);
  const denominador = pares.reduce((soma, [x]) => soma + (x - mediaX) ** 2, 0);
  if (denominador === 0) throw new RangeError("Os valores de x não podem ser todos iguais.");

  const inclinacao = numerador / denominador;
  const intercepto = mediaY - inclinacao * mediaX;
  return {
    inclinacao,
    intercepto,
    prever(x) {
      if (typeof x !== "number" || !Number.isFinite(x)) {
        throw new TypeError("x deve ser um número finito.");
      }
      return inclinacao * x + intercepto;
    },
  };
}

export function frequenciaTermos(texto) {
  if (typeof texto !== "string") throw new TypeError("Informe um texto.");
  const termos = texto.toLocaleLowerCase("pt-BR").match(/[\p{L}\p{N}]+/gu) ?? [];
  const frequencias = new Map();
  for (const termo of termos) {
    frequencias.set(termo, (frequencias.get(termo) ?? 0) + 1);
  }
  return frequencias;
}
