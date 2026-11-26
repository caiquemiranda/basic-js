/** Percorre uma árvore em pré-ordem e registra a profundidade. */
export function percorrerArvore(raiz) {
  const vistos = new Set();
  const resultado = [];

  function visitar(no, profundidade) {
    if (!no || typeof no !== "object" || Array.isArray(no) ||
        !Array.isArray(no.filhos) || typeof no.valor !== "string") {
      throw new TypeError("Cada nó precisa de valor textual e filhos em array.");
    }
    if (vistos.has(no)) throw new RangeError("A estrutura contém ciclo ou nó compartilhado.");
    vistos.add(no);
    resultado.push({ valor: no.valor, profundidade });
    for (const filho of no.filhos) visitar(filho, profundidade + 1);
  }

  visitar(raiz, 0);
  return resultado;
}
