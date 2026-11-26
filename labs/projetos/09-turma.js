import { media } from "../../src/math.js";
import { situacao } from "../../src/fundamentos.js";

/** Produz um boletim ordenado pela média de cada estudante. */
export function relatorioTurma(estudantes) {
  if (!Array.isArray(estudantes) || estudantes.length === 0) {
    throw new TypeError("Informe uma turma não vazia.");
  }
  const boletim = estudantes.map((estudante) => {
    if (!estudante || typeof estudante.nome !== "string" || !estudante.nome.trim() ||
        !Array.isArray(estudante.notas) || estudante.notas.length === 0 ||
        estudante.notas.some((nota) => situacao(nota) === "nota inválida")) {
      throw new TypeError("Estudante precisa de nome e notas entre 0 e 10.");
    }
    const resultado = media(estudante.notas);
    return { nome: estudante.nome.trim(), media: resultado, situacao: situacao(resultado) };
  }).toSorted((a, b) => b.media - a.media || a.nome.localeCompare(b.nome, "pt-BR"));

  return {
    boletim,
    mediaTurma: media(boletim.map((estudante) => estudante.media)),
    aprovados: boletim.filter((estudante) => estudante.situacao === "aprovado").length,
  };
}
