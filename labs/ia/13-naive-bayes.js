function tokenizar(texto) {
  return texto.toLocaleLowerCase("pt-BR").match(/[\p{L}\p{N}]+/gu) ?? [];
}

/** Treina um classificador multinomial de texto com suavização de Laplace. */
export function treinarNaiveBayes(exemplos) {
  if (!Array.isArray(exemplos) || exemplos.length < 2 ||
      exemplos.some((exemplo) => !exemplo ||
        typeof exemplo.texto !== "string" ||
        typeof exemplo.rotulo !== "string" || !exemplo.rotulo)) {
    throw new TypeError("Informe exemplos com texto e rótulo.");
  }
  const classes = new Map();
  const vocabulario = new Set();
  for (const exemplo of exemplos) {
    if (!classes.has(exemplo.rotulo)) {
      classes.set(exemplo.rotulo, { documentos: 0, totalTermos: 0, termos: new Map() });
    }
    const classe = classes.get(exemplo.rotulo);
    classe.documentos++;
    for (const termo of tokenizar(exemplo.texto)) {
      vocabulario.add(termo);
      classe.totalTermos++;
      classe.termos.set(termo, (classe.termos.get(termo) ?? 0) + 1);
    }
  }
  if (classes.size < 2 || vocabulario.size === 0) {
    throw new TypeError("Use pelo menos duas classes e algum termo.");
  }
  return { classes, vocabulario, totalDocumentos: exemplos.length };
}

export function classificarTexto(modelo, texto) {
  if (!modelo || !(modelo.classes instanceof Map) ||
      !(modelo.vocabulario instanceof Set) || typeof texto !== "string") {
    throw new TypeError("Informe modelo treinado e texto.");
  }
  const termos = tokenizar(texto).filter((termo) => modelo.vocabulario.has(termo));
  const pontuacoes = [...modelo.classes].map(([rotulo, classe]) => {
    let logProbabilidade = Math.log(classe.documentos / modelo.totalDocumentos);
    for (const termo of termos) {
      const ocorrencias = classe.termos.get(termo) ?? 0;
      logProbabilidade += Math.log((ocorrencias + 1) /
        (classe.totalTermos + modelo.vocabulario.size));
    }
    return { rotulo, logProbabilidade };
  }).toSorted((a, b) =>
    b.logProbabilidade - a.logProbabilidade || a.rotulo.localeCompare(b.rotulo)
  );
  return pontuacoes[0].rotulo;
}
