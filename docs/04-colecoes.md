# 04 · Arrays e coleções

Arrays guardam sequências ordenadas. `Map` associa chaves a valores; `Set` mantém valores únicos. Escolha a estrutura pelo problema, não pelo hábito.

## Arrays sem surpresas

```js
const notas = [7, 9, 5];
const aprovadas = notas.filter((nota) => nota >= 7);
const ajustadas = notas.map((nota) => nota + 1);
const soma = notas.reduce((total, nota) => total + nota, 0);
console.log(aprovadas, ajustadas, soma); // [7, 9], [8, 10, 6], 21
```

`map` transforma cada item; `filter` seleciona; `find` retorna o primeiro; `some` e `every` respondem perguntas; `reduce` acumula. `forEach` executa efeitos, mas não cria um novo array. `push`, `splice` e `sort` alteram o array original. `toSorted` devolve uma cópia ordenada:

```js
const numeros = [10, 2, 1];
console.log(numeros.toSorted((a, b) => a - b)); // [1, 2, 10]
console.log(numeros); // [10, 2, 1]
```

Sem função comparadora, a ordenação é lexicográfica. A cópia por `[...array]` é **rasa**: objetos internos continuam compartilhados.

## Map e Set

```js
const unicos = new Set(["js", "js", "web"]);
const visitas = new Map([["Ana", 2]]);
visitas.set("Bia", 1);
console.log([...unicos]); // ["js", "web"]
console.log(visitas.get("Ana")); // 2
```

`Map` aceita chaves de qualquer tipo. Um objeto comum é útil para registros com campos conhecidos; `Map` é melhor para uma tabela dinâmica de chaves.

## Strings, números, datas e expressão regular

Strings são imutáveis. `trim`, `slice`, `includes` e `replace` retornam novos valores. `Intl.NumberFormat("pt-BR")` formata números para exibição, sem mudar o valor numérico. `Date` representa um instante; datas e fusos merecem cuidado. Para registros e APIs, prefira ISO 8601, por exemplo `2026-11-25T12:00:00Z`. Uma expressão regular simples como `/\\s+/u` reconhece espaços; não use regex como substituto para um parser complexo.

## Experimente

Execute [04-colecoes.js](../examples/04-colecoes.js). Faça uma versão sem mutação de uma lista de notas. Adicione um nome repetido ao `Set` e observe seu tamanho.
