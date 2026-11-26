/** Converte uma nota digitada em português ou inglês para Number. */
export function lerNota(texto) {
  if (typeof texto !== "string") throw new TypeError("A nota deve ser texto.");
  const entrada = texto.trim();
  if (!/^(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(entrada)) {
    throw new TypeError("Use apenas um número decimal.");
  }
  const nota = Number(entrada.replace(",", "."));
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    throw new RangeError("A nota deve estar entre 0 e 10.");
  }
  return nota;
}
