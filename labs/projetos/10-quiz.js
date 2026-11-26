/** Corrige respostas de um quiz de alternativa única. */
export function avaliarQuiz(questoes, respostas) {
  if (!Array.isArray(questoes) || questoes.length === 0 ||
      !respostas || typeof respostas !== "object" || Array.isArray(respostas)) {
    throw new TypeError("Informe questões e respostas por ID.");
  }
  const ids = new Set();
  const detalhes = questoes.map((questao) => {
    if (!questao || typeof questao.id !== "string" || !questao.id ||
        ids.has(questao.id) || !Array.isArray(questao.alternativas) ||
        questao.alternativas.length < 2 ||
        !questao.alternativas.includes(questao.correta)) {
      throw new TypeError("Questão inválida ou ID repetido.");
    }
    ids.add(questao.id);
    const resposta = Object.hasOwn(respostas, questao.id) ? respostas[questao.id] : null;
    const correta = resposta === questao.correta;
    return { id: questao.id, resposta, correta };
  });
  return {
    pontos: detalhes.filter((item) => item.correta).length,
    total: questoes.length,
    detalhes,
  };
}
