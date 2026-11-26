export function media(valores) {
  if (!Array.isArray(valores) || valores.length === 0 ||
      valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
    throw new TypeError("Informe um array não vazio de números finitos.");
  }
  return valores.reduce((soma, valor) => soma + valor, 0) / valores.length;
}

export function normalizarMinMax(valores) {
  if (!Array.isArray(valores) || valores.length === 0 ||
      valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
    throw new TypeError("Informe um array não vazio de números finitos.");
  }
  const minimo = Math.min(...valores);
  const maximo = Math.max(...valores);
  if (minimo === maximo) return valores.map(() => 0);
  return valores.map((valor) => (valor - minimo) / (maximo - minimo));
}
