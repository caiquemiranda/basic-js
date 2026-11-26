/** Resume uma amostra numérica sem alterar o array recebido. */
export function resumirNumeros(valores) {
  if (!Array.isArray(valores) || valores.length === 0 ||
      valores.some((valor) => typeof valor !== "number" || !Number.isFinite(valor))) {
    throw new TypeError("Informe um array não vazio de números finitos.");
  }
  const ordenados = valores.toSorted((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);
  const mediana = ordenados.length % 2 === 1
    ? ordenados[meio]
    : (ordenados[meio - 1] + ordenados[meio]) / 2;
  const soma = valores.reduce((total, valor) => total + valor, 0);
  return {
    quantidade: valores.length,
    minimo: ordenados[0],
    maximo: ordenados.at(-1),
    media: soma / valores.length,
    mediana,
  };
}
