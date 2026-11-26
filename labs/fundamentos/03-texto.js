const termos = /[\p{L}\p{N}]+/gu;

/** Conta palavras Unicode preservando acentos no resultado. */
export function contarPalavras(texto) {
  if (typeof texto !== "string") throw new TypeError("Informe um texto.");
  const contagem = new Map();
  for (const palavra of texto.toLocaleLowerCase("pt-BR").match(termos) ?? []) {
    contagem.set(palavra, (contagem.get(palavra) ?? 0) + 1);
  }
  return contagem;
}

/** Ignora espaços, pontuação, maiúsculas e acentos ao comparar. */
export function ehPalindromo(texto) {
  if (typeof texto !== "string") throw new TypeError("Informe um texto.");
  const limpo = texto.normalize("NFD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]/gu, "").toLocaleLowerCase("pt-BR");
  if (limpo.length === 0) return false;
  return [...limpo].join("") === [...limpo].reverse().join("");
}
