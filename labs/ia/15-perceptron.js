/** Treina um classificador binário linear simples. */
export function treinarPerceptron(amostras, { epocas = 100, taxa = 0.1 } = {}) {
  if (!Array.isArray(amostras) || amostras.length === 0 ||
      !Array.isArray(amostras[0]?.valores) || amostras[0].valores.length === 0 ||
      !Number.isInteger(epocas) || epocas < 1 ||
      typeof taxa !== "number" || !Number.isFinite(taxa) || taxa <= 0) {
    throw new TypeError("Informe amostras, épocas e taxa válidas.");
  }
  const dimensoes = amostras[0].valores.length;
  if (amostras.some((amostra) => !Array.isArray(amostra?.valores) ||
      amostra.valores.length !== dimensoes ||
      amostra.valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor)) ||
      (amostra.rotulo !== 0 && amostra.rotulo !== 1))) {
    throw new TypeError("Cada amostra precisa de vetor finito e rótulo 0 ou 1.");
  }

  const pesos = Array(dimensoes).fill(0);
  let vies = 0;
  const ativacao = (valores) =>
    valores.reduce((soma, valor, i) => soma + valor * pesos[i], vies) >= 0 ? 1 : 0;

  for (let epoca = 0; epoca < epocas; epoca++) {
    let erros = 0;
    for (const { valores, rotulo } of amostras) {
      const diferenca = rotulo - ativacao(valores);
      if (diferenca !== 0) {
        erros++;
        for (let i = 0; i < dimensoes; i++) pesos[i] += taxa * diferenca * valores[i];
        vies += taxa * diferenca;
      }
    }
    if (erros === 0) break;
  }

  return {
    pesos: [...pesos],
    vies,
    prever(valores) {
      if (!Array.isArray(valores) || valores.length !== dimensoes ||
          valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
        throw new TypeError("Vetor de previsão inválido.");
      }
      return ativacao(valores);
    },
  };
}
