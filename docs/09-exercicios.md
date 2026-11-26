# 09 · Exercícios e testes

Tente resolver sem olhar a implementação. Crie um arquivo em `examples/` ou uma função em `src/`, execute com Node.js e escreva pelo menos um caso de teste para cada regra. Depois compare com os exemplos existentes.

## Nível 1 · Sintaxe e decisões

1. **Conversão de entrada:** escreva `lerNota(texto)` que aceite `"7.5"` e rejeite `""`, `"abc"` e valores fora de 0 a 10. Dica: validar vazio antes de `Number`.
2. **Faixas:** altere `situacao` para que o limite de aprovação seja um parâmetro opcional. O que ocorre se ele for `0`?
3. **Contador:** escreva uma closure `criarContador(inicio)` com métodos `incrementar` e `zerar`.

## Nível 2 · Dados e coleções

4. **Frequência:** conte nomes repetidos de uma lista usando `Map`. Exemplo: `["Ana", "Bia", "Ana"]` → Ana: 2, Bia: 1.
5. **Média de turma:** receba um array de objetos `{ nome, nota }`, filtre notas válidas e calcule a média. Decida explicitamente o que fazer com lista vazia.
6. **Cópia rasa:** faça uma cópia de `{ perfil: { nome: "Ana" } }`, mude o nome interno e explique por que o original mudou.

## Nível 3 · Assincronia e interface

7. **Promise:** execute duas tarefas independentes com `Promise.all`, trate uma rejeição e explique a ordem das mensagens.
8. **DOM:** adicione um botão “Limpar lista” à página. Atualize o array e o DOM no mesmo evento.
9. **Formulário:** melhore a mensagem para uma nota fora de 0 a 10. Use `textContent`, não `innerHTML`.

## Nível 4 · IA didática

10. **Escala:** normalize `[5, 10, 15]`. Resultado esperado: `[0, 0.5, 1]`. O que fazer com `[5, 5]`?
11. **k-NN:** adicione uma amostra nova e compare previsões com `k=1` e `k=3`. Explique por que as classes podem diferir.
12. **Regressão:** ajuste uma reta com `[[1, 3], [2, 5], [3, 7]]`. Preveja `x=4` (resultado 9). Acrescente um ponto fora da reta e observe a mudança.
13. **Avaliação:** separe manualmente três amostras para teste. Conte acertos, erros e acurácia. Evite usar as amostras de teste no ajuste.

## Como escrever um teste

```js
import test from "node:test";
import assert from "node:assert/strict";

test("uma regra importante", () => {
  assert.equal(2 + 2, 4);
});
```

Rode `npm test`. Os arquivos em [test/](../test/) mostram testes de limites, entradas inválidas e cálculos. Um teste útil verifica comportamento observável, especialmente casos em que é fácil errar.
