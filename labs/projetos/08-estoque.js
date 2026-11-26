/** Registra uma entrada ou saída de estoque sem alterar o inventário anterior. */
export function movimentarEstoque(inventario, id, variacao) {
  if (!Array.isArray(inventario) || typeof id !== "string" ||
      !Number.isSafeInteger(variacao) || variacao === 0) {
    throw new TypeError("Informe inventário, ID e variação inteira não nula.");
  }
  const ids = inventario.map((item) => item.id);
  if (new Set(ids).size !== ids.length) throw new RangeError("Inventário contém IDs repetidos.");
  const atual = inventario.find((item) => item.id === id);
  if (!atual) throw new RangeError("Produto não encontrado.");
  if (!Number.isSafeInteger(atual.quantidade) || atual.quantidade < 0) {
    throw new TypeError("Quantidade atual inválida.");
  }
  const quantidade = atual.quantidade + variacao;
  if (!Number.isSafeInteger(quantidade) || quantidade < 0) {
    throw new RangeError("Movimento resulta em estoque inválido.");
  }
  return inventario.map((item) => item.id === id ? { ...item, quantidade } : item);
}
