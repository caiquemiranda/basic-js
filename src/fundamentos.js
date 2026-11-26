export function situacao(nota) {
  if (typeof nota !== "number" || !Number.isFinite(nota) || nota < 0 || nota > 10) {
    return "nota inválida";
  }
  if (nota >= 7) return "aprovado";
  if (nota >= 5) return "recuperação";
  return "reprovado";
}
