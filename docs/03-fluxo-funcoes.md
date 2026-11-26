# 03 · Fluxo, funções e escopo

Condições escolhem caminhos; laços repetem trabalho; funções agrupam comportamento. Pense nas entradas, saídas e casos de borda antes de escrever a implementação.

## Condições e repetição

```js
function situacao(nota) {
  if (nota < 0 || nota > 10) return "nota inválida";
  if (nota >= 7) return "aprovado";
  if (nota >= 5) return "recuperação";
  return "reprovado";
}

for (const nota of [4, 6, 9]) console.log(situacao(nota));
```

Use `switch` para várias alternativas discretas, `for...of` para valores de iteráveis, `for` quando o índice importa e `while` quando a condição controla a duração. `break` encerra um laço; `continue` pula para a próxima repetição. `for...in` enumera chaves e costuma ser inadequado para valores de array.

## Funções e parâmetros

```js
function somar(a, b = 0) { return a + b; }
const dobrar = (n) => n * 2;
function somarTudo(...numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}
const copia = [...[1, 2], 3];
```

`...numeros` em parâmetros reúne argumentos (rest); `...[1, 2]` em uma expressão expande valores (spread). Funções podem ser passadas como valores para `map`, `filter` e outros métodos.

## Escopo, closure e `this`

`let` e `const` têm escopo de bloco. Uma função interna pode lembrar variáveis do escopo onde foi criada; isso é uma **closure**:

```js
function criarContador() {
  let valor = 0;
  return () => ++valor;
}
const proximo = criarContador();
console.log(proximo(), proximo()); // 1, 2
```

Funções arrow não criam seu próprio `this`; métodos que dependem do objeto receptor normalmente ficam mais claros com a sintaxe `metodo() { ... }`. Recursão é uma função chamando a si mesma e precisa de uma condição de parada.

## Experimente

Execute [03-funcoes.js](../examples/03-funcoes.js). Altere os limites de aprovação e adicione um caso de nota inválida. A função `situacao` deste capítulo aparece implementada e testada em [src/fundamentos.js](../src/fundamentos.js).
