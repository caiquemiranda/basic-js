# 10 · Glossário e próximos passos

## Referência rápida

| Termo | Ideia principal |
| --- | --- |
| Valor primitivo | `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` ou `null` |
| Objeto | Conjunto de propriedades, comparado por referência |
| Array | Sequência ordenada, com métodos como `map` e `filter` |
| Escopo | Região onde um nome pode ser usado |
| Closure | Função que mantém acesso ao escopo em que foi criada |
| Callback | Função passada para ser chamada por outra função |
| Promise | Representação de um resultado futuro |
| Módulo | Arquivo com importações e exportações |
| DOM | Representação da página HTML no navegador |
| Evento | Sinal de uma ação, como clique ou envio de formulário |
| JSON | Formato de texto para troca de dados |
| Característica | Valor numérico usado para representar uma amostra em um modelo |
| Rótulo | Categoria conhecida de uma amostra |
| Treino/teste | Separação de dados para ajustar e depois avaliar um modelo |

## Erros comuns

- `"2" + 2` produz `"22"`; converta antes de somar.
- `[] === []` é `false`; são objetos distintos.
- `[10, 2].sort()` ordena como texto; use comparador numérico ou `toSorted((a, b) => a - b)`.
- `NaN === NaN` é `false`; use `Number.isNaN`.
- `||` substitui também `0` e `""`; use `??` quando esses valores são válidos.
- `fetch` com resposta 404 ainda resolve uma Promise; confira `response.ok`.
- `const` impede reatribuição da variável, não torna um objeto profundamente imutável.
- Copiar um array com spread não duplica objetos internos.
- `document` não é parte do Node.js; `node:test` não é parte do navegador.
- Colocar uma chave de API no JavaScript do navegador a expõe a visitantes.

## Depois dos fundamentos

1. Resolva exercícios sem olhar a resposta e escreva testes próprios.
2. Construa uma página pequena com formulário, estado, validação e mensagens de erro.
3. Aprenda HTTP, acessibilidade, segurança do navegador e ferramentas de desenvolvimento.
4. Estude organização de projetos, lint, TypeScript e gerenciamento de dependências quando o projeto justificar.
5. Para IA, aprofunde estatística, álgebra linear, validação de modelos e qualidade dos dados antes de escolher uma biblioteca.

## Fontes para consulta contínua

- [Guia JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [Referência JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
- [ECMAScript, especificação atual](https://tc39.es/ecma262/)
- [Node.js, documentação oficial](https://nodejs.org/docs/latest-v22.x/api/)
- [Web APIs da MDN](https://developer.mozilla.org/pt-BR/docs/Web/API)
