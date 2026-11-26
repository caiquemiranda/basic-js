# JavaScript básico: fundamentos com prática

Um roteiro de estudo em português para aprender JavaScript moderno com exemplos pequenos, exercícios e testes. O projeto usa apenas recursos nativos: navegador para a interface e Node.js para os exemplos de terminal. Não há instalação de dependências.

## Comece aqui

1. Instale [Node.js](https://nodejs.org/) **22 ou superior** e confira com `node --version`.
2. Clone o repositório e entre na pasta.
3. Execute `npm test` para verificar os exercícios resolvidos e `npm start` para rodar todos os exemplos.
4. Execute `npm run web` e abra `http://127.0.0.1:8000/` para experimentar eventos e DOM.
5. Leia os capítulos na ordem abaixo e altere os exemplos. Rode os testes após cada alteração.

> JavaScript é a linguagem; ECMAScript define seu núcleo. Node.js e o navegador são ambientes diferentes: `document` existe no navegador, enquanto APIs como `node:test` são do Node.js.

## Trilha de estudo

| Etapa | Conteúdo | Exemplo |
| --- | --- | --- |
| 01 | [Ambientes e primeiros passos](docs/01-primeiros-passos.md) | [Primeiros valores](examples/01-valores.js) |
| 02 | [Tipos, conversão e operadores](docs/02-tipos-e-operadores.md) | [Tipos e operadores](examples/02-tipos.js) |
| 03 | [Fluxo, funções e escopo](docs/03-fluxo-funcoes.md) | [Funções](examples/03-funcoes.js) |
| 04 | [Arrays e coleções](docs/04-colecoes.md) | [Coleções](examples/04-colecoes.js), [texto e datas](examples/08-texto-datas.js) |
| 05 | [Objetos e classes](docs/05-objetos-classes.md) | [Objetos](examples/05-objetos.js) |
| 06 | [Módulos, erros e assincronia](docs/06-modulos-assincronia.md) | [Assincronia](examples/06-assincronia.js) |
| 07 | [DOM e eventos](docs/07-dom.md) | [Página interativa](index.html) |
| 08 | [Fundamentos aplicados à IA](docs/08-ia-basica.md) | [IA sem bibliotecas](examples/07-ia.js) |
| 09 | [Exercícios e testes](docs/09-exercicios.md) | [Testes](test/) |
| 10 | [Glossário e próximos passos](docs/10-glossario.md) | — |

## Como estudar

Para cada capítulo: leia o conceito, execute o exemplo, preveja o resultado antes de vê-lo, mude uma entrada e explique o que mudou. Os exemplos são intencionalmente pequenos. Os testes mostram casos comuns e casos de borda; use-os como feedback, não como substituto da leitura.

## O que você conseguirá fazer

- Explicar tipos, conversões, operadores, escopo e fluxo de controle sem depender de memorizar sintaxe isolada.
- Manipular arrays, `Map`, `Set`, objetos e JSON, reconhecendo mutação e cópias rasas.
- Dividir código em módulos, tratar erros e entender `Promise`, `async/await` e `fetch`.
- Construir uma interface pequena com formulários, eventos e DOM.
- Preparar dados e implementar dois modelos didáticos: k-NN e regressão linear.
- Escrever testes que cubram limites e entradas inválidas.

Se você está começando, percorra 01–07 antes de 08. O capítulo de IA reutiliza os fundamentos anteriores e não exige biblioteca de aprendizado de máquina.
## Requisitos e comandos

| Comando | Resultado |
| --- | --- |
| `node examples/02-tipos.js` | Executa um exemplo isolado |
| `npm start` | Executa todos os exemplos de terminal |
| `npm test` | Executa a suíte nativa de testes |
| `npm run web` | Inicia o laboratório no navegador em `127.0.0.1:8000` |

Os arquivos em `src/` contêm funções reutilizáveis; `examples/` demonstra o uso; `test/` verifica o comportamento. A interface de `index.html` usa os mesmos módulos de `src/` no navegador.

## Referências

O material acompanha recursos consolidados da linguagem, evitando propostas experimentais:

- [Guia de JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)
- [Referência de JavaScript da MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference)
- [Especificação ECMAScript](https://tc39.es/ecma262/)
- [Documentação do Node.js](https://nodejs.org/docs/latest-v22.x/api/)
- [API de testes do Node.js](https://nodejs.org/docs/latest-v22.x/api/test.html)

## Evolução do material

Os commits abaixo formam pontos de estudo. Abra um diff para ver exatamente o que cada etapa acrescentou.

| Etapa | Commit | O que estudar |
| --- | --- | --- |
| Base | [`2b4f59a`](https://github.com/caiquemiranda/basic-js/commit/2b4f59a2029586dcc4e73ceaf19e10cbe867dfb3) | Roteiro, ambiente e primeiro programa |
| Tipos e funções | [`178724b`](https://github.com/caiquemiranda/basic-js/commit/178724b5607afc6dec54e2fab916542118c452a8) | Tipos, operadores, fluxo, escopo |
| Coleções | [`bdc4a45`](https://github.com/caiquemiranda/basic-js/commit/bdc4a45310fe3e72b319c56d161a9720ab1afe93) | Arrays, Map, Set e funções numéricas |
| Objetos | [`050f8c0`](https://github.com/caiquemiranda/basic-js/commit/050f8c07ce46739922cf63e6eb0d105b18d4e335) | JSON, referências, classes e protótipos |
| Assincronia | [`dcb8768`](https://github.com/caiquemiranda/basic-js/commit/dcb87686eabbde0b9c5c4c9d1f1638b3ff515478) | Módulos, erros, Promises e fetch |
| DOM | [`bdccb5c`](https://github.com/caiquemiranda/basic-js/commit/bdccb5cf61ca7b7ffc3b03a1ca5866469a0a981d) | Primeira página interativa |
| IA básica | [`cd3c3f7`](https://github.com/caiquemiranda/basic-js/commit/cd3c3f7882397b8bd05af6d2ac7ddf4bcee1322c) | Dados, k-NN, regressão e texto |
| Exercícios | [`b8a175f`](https://github.com/caiquemiranda/basic-js/commit/b8a175ff570d69fe51b662347af803b59318ff31) | Testes e desafios graduais |
| Revisão | [`7f4fa5a`](https://github.com/caiquemiranda/basic-js/commit/7f4fa5a53fd19217e6110fc3d407e4d10ac80406) | Percurso executável e glossário |
| Laboratório | [`6b66540`](https://github.com/caiquemiranda/basic-js/commit/6b66540e56eae6136f1a97427ba2758e3481ee3d) | Servidor local e demo de IA |
| Aprofundamento | [`db98ca4`](https://github.com/caiquemiranda/basic-js/commit/db98ca450f849d80006ec7bcf490e119707d8617) | Texto, datas e normalização robusta |
