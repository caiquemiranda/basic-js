# JavaScript básico: fundamentos com prática

Um roteiro de estudo em português para aprender JavaScript moderno com exemplos pequenos, exercícios e testes. O projeto usa apenas recursos nativos: navegador para a interface e Node.js para os exemplos de terminal. Não há instalação de dependências.

## Comece aqui

1. Instale [Node.js](https://nodejs.org/) **22 ou superior** e confira com `node --version`.
2. Clone o repositório e entre na pasta.
3. Execute `npm test` para verificar os exercícios resolvidos e `npm start` para rodar todos os exemplos.
4. Abra `index.html` em um navegador para experimentar eventos e DOM.
5. Leia os capítulos na ordem abaixo e altere os exemplos. Rode os testes após cada alteração.

> JavaScript é a linguagem; ECMAScript define seu núcleo. Node.js e o navegador são ambientes diferentes: `document` existe no navegador, enquanto APIs como `node:test` são do Node.js.

## Trilha de estudo

| Etapa | Conteúdo | Exemplo |
| --- | --- | --- |
| 01 | [Ambientes e primeiros passos](docs/01-primeiros-passos.md) | [Primeiros valores](examples/01-valores.js) |
| 02 | [Tipos, conversão e operadores](docs/02-tipos-e-operadores.md) | [Tipos e operadores](examples/02-tipos.js) |
| 03 | [Fluxo, funções e escopo](docs/03-fluxo-funcoes.md) | [Funções](examples/03-funcoes.js) |
| 04 | [Arrays e coleções](docs/04-colecoes.md) | [Coleções](examples/04-colecoes.js) |
| 05 | [Objetos e classes](docs/05-objetos-classes.md) | [Objetos](examples/05-objetos.js) |
| 06 | [Módulos, erros e assincronia](docs/06-modulos-assincronia.md) | [Assincronia](examples/06-assincronia.js) |
| 07 | [DOM e eventos](docs/07-dom.md) | [Página interativa](index.html) |
| 08 | [Fundamentos aplicados à IA](docs/08-ia-basica.md) | [IA sem bibliotecas](examples/07-ia.js) |
| 09 | [Exercícios e testes](docs/09-exercicios.md) | [Testes](test/) |
| 10 | [Glossário e próximos passos](docs/10-glossario.md) | — |

## Como estudar

Para cada capítulo: leia o conceito, execute o exemplo, preveja o resultado antes de vê-lo, mude uma entrada e explique o que mudou. Os exemplos são intencionalmente pequenos. Os testes mostram casos comuns e casos de borda; use-os como feedback, não como substituto da leitura.

## Requisitos e comandos

| Comando | Resultado |
| --- | --- |
| `node examples/02-tipos.js` | Executa um exemplo isolado |
| `npm start` | Executa todos os exemplos de terminal |
| `npm test` | Executa a suíte nativa de testes |

Os arquivos em `src/` contêm funções reutilizáveis; `examples/` demonstra o uso; `test/` verifica o comportamento. A interface de `index.html` usa os mesmos módulos de `src/` no navegador.

## Referências

O material acompanha recursos consolidados da linguagem, evitando propostas experimentais:

- [Guia de JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [Referência de JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
- [Especificação ECMAScript](https://tc39.es/ecma262/)
- [Documentação do Node.js](https://nodejs.org/docs/latest-v22.x/api/)
- [API de testes do Node.js](https://nodejs.org/docs/latest-v22.x/api/test.html)

## Evolução do material

Os capítulos foram adicionados em commits temáticos. A tabela com os links dos commits está no fim do README.
