function validarLista(lista) {
  if (!Array.isArray(lista)) throw new TypeError("A lista deve ser um array.");
}

export function adicionarTarefa(lista, id, titulo) {
  validarLista(lista);
  if (!Number.isInteger(id) || id < 1 || typeof titulo !== "string" || !titulo.trim()) {
    throw new TypeError("Informe id positivo e título não vazio.");
  }
  if (lista.some((tarefa) => tarefa.id === id)) throw new RangeError("ID já existe.");
  return [...lista, { id, titulo: titulo.trim(), concluida: false }];
}

export function concluirTarefa(lista, id) {
  validarLista(lista);
  if (!lista.some((tarefa) => tarefa.id === id)) throw new RangeError("Tarefa não encontrada.");
  return lista.map((tarefa) => tarefa.id === id ? { ...tarefa, concluida: true } : tarefa);
}

export function removerTarefa(lista, id) {
  validarLista(lista);
  if (!lista.some((tarefa) => tarefa.id === id)) throw new RangeError("Tarefa não encontrada.");
  return lista.filter((tarefa) => tarefa.id !== id);
}
