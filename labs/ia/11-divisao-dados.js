/** Divide amostras de modo reproduzível; usa PRNG apenas para fins didáticos. */
export function dividirDados(amostras, proporcaoTeste = 0.2, semente = 1) {
  if (!Array.isArray(amostras) || amostras.length < 2 ||
      typeof proporcaoTeste !== "number" || !Number.isFinite(proporcaoTeste) ||
      proporcaoTeste <= 0 || proporcaoTeste >= 1 ||
      !Number.isInteger(semente)) {
    throw new TypeError("Informe amostras, proporção entre 0 e 1 e semente inteira.");
  }

  let estado = semente >>> 0;
  function aleatorio() {
    estado += 0x6D2B79F5;
    let t = estado;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  const embaralhadas = [...amostras];
  for (let i = embaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(aleatorio() * (i + 1));
    [embaralhadas[i], embaralhadas[j]] = [embaralhadas[j], embaralhadas[i]];
  }
  const quantidadeTeste = Math.max(1, Math.min(amostras.length - 1,
    Math.round(amostras.length * proporcaoTeste)));
  return {
    treino: embaralhadas.slice(quantidadeTeste),
    teste: embaralhadas.slice(0, quantidadeTeste),
  };
}
