# 02 · Tipos, conversão e operadores

JavaScript tem sete tipos primitivos: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` e `null`. Objetos, arrays e funções pertencem à família de objetos. `typeof null` retorna `"object"` por uma razão histórica; use `valor === null` quando precisar distingui-lo.

## Declare e inspecione

```js
const nome = "Ada";
const idade = 37;
const ativo = true;
const ausente = null;
let resposta; // undefined
const identificador = Symbol("id");
const inteiroGrande = 9_007_199_254_740_992n;

console.log(typeof nome, typeof idade, typeof ativo);
console.log(Array.isArray([])); // true; typeof [] seria "object"
```

`number` usa ponto flutuante de precisão dupla. `NaN` representa um resultado numérico inválido e deve ser testado com `Number.isNaN`. Para inteiros fora do intervalo seguro, considere `bigint`; não misture `bigint` e `number` sem conversão explícita.

## Comparação e conversão

Prefira `===` e `!==`: eles não convertem tipos silenciosamente. `"5" === 5` é `false`, mas `Number("5") === 5` é `true`. `Number("")` é `0`; valide entrada do usuário antes de converter. `parseInt("12px", 10)` produz `12`, mas `Number("12px")` produz `NaN`.

Valores falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined` e `NaN`. Arrays e objetos vazios são truthy. `&&` e `||` retornam operandos, não necessariamente booleanos.

## Operadores úteis

```js
const configuracao = { tentativas: 0 };
console.log(configuracao.tentativas || 3); // 3: zero é falsy
console.log(configuracao.tentativas ?? 3); // 0: só null/undefined ativam o padrão
console.log(configuracao.usuario?.nome ?? "visitante"); // visitante
console.log(2 ** 3, 7 % 3); // 8, 1
```

Use `?.` para acesso opcional e `??` para valores padrão que preservem `0`, `false` e `""`. Operadores de atribuição como `+=` e `??=` encurtam atualizações, mas clareza vem primeiro.

## Experimente

Execute [02-tipos.js](../examples/02-tipos.js). Antes, tente prever `typeof null`, `Boolean([])` e `Number.isNaN(Number("abc"))`. Depois troque `0` por `null` no exemplo de `??`.
