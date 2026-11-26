/** Agrupa registros por uma chave calculada sem converter chaves em texto. */
export function agruparPor(registros, selecionarChave) {
  if (!Array.isArray(registros) || typeof selecionarChave !== "function") {
    throw new TypeError("Informe um array e uma função de seleção.");
  }
  const grupos = new Map();
  for (const registro of registros) {
    const chave = selecionarChave(registro);
    if (!grupos.has(chave)) grupos.set(chave, []);
    grupos.get(chave).push(registro);
  }
  return grupos;
}

export function contarPor(registros, selecionarChave) {
  return new Map(
    [...agruparPor(registros, selecionarChave)]
      .map(([chave, itens]) => [chave, itens.length])
  );
}
