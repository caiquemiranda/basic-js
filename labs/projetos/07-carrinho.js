/** Usa centavos inteiros para evitar arredondamento de moeda com float. */
export function adicionarProduto(carrinho, produto) {
  if (!Array.isArray(carrinho) || !produto ||
      typeof produto.id !== "string" || !produto.id ||
      typeof produto.nome !== "string" || !produto.nome.trim() ||
      !Number.isSafeInteger(produto.precoCentavos) || produto.precoCentavos < 0 ||
      !Number.isSafeInteger(produto.quantidade) || produto.quantidade < 1) {
    throw new TypeError("Produto ou carrinho inválido.");
  }
  const existente = carrinho.find((item) => item.id === produto.id);
  if (existente && (existente.precoCentavos !== produto.precoCentavos ||
      existente.nome !== produto.nome.trim())) {
    throw new RangeError("Produto com mesmo ID e dados diferentes.");
  }
  if (!existente) return [...carrinho, { ...produto, nome: produto.nome.trim() }];
  return carrinho.map((item) => item.id === produto.id
    ? { ...item, quantidade: item.quantidade + produto.quantidade }
    : item);
}

export function totalCentavos(carrinho) {
  if (!Array.isArray(carrinho)) throw new TypeError("Informe um carrinho.");
  return carrinho.reduce((total, item) => {
    if (!Number.isSafeInteger(item.precoCentavos) || item.precoCentavos < 0 ||
        !Number.isSafeInteger(item.quantidade) || item.quantidade < 1) {
      throw new TypeError("Item inválido no carrinho.");
    }
    const novoTotal = total + item.precoCentavos * item.quantidade;
    if (!Number.isSafeInteger(novoTotal)) throw new RangeError("Total excede o limite seguro.");
    return novoTotal;
  }, 0);
}
