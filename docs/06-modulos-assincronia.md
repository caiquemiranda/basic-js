# 06 · Módulos, erros e assincronia

Módulos dividem o programa em arquivos com responsabilidades claras. `export` publica valores; `import` os utiliza. Nomes exportados são explícitos, o que facilita encontrar dependências.

```js
// src/math.js
export function media(valores) { /* ... */ }

// examples/04-colecoes.js
import { media } from "../src/math.js";
```

## Erros são parte do contrato

Uma função deve dizer o que faz com entrada inválida: retornar um valor definido ou lançar um erro. `throw new TypeError(...)` serve para tipo/forma incorretos. Use `try/catch` no limite em que você consegue apresentar uma resposta útil. Não ignore erros em silêncio; preserve a causa ou forneça contexto.

```js
try {
  JSON.parse("{inválido}");
} catch (erro) {
  console.error("Não foi possível ler o JSON:", erro.message);
}
```

## Promises e async/await

Uma Promise representa um resultado futuro que pode ser resolvido ou rejeitado. Uma função `async` sempre retorna uma Promise. `await` espera a resolução sem bloquear o processo inteiro. Para tarefas independentes, `Promise.all` pode executá-las concorrentemente; se uma falhar, o conjunto rejeita.

```js
async function carregar() {
  const [a, b] = await Promise.all([
    Promise.resolve(2),
    Promise.resolve(3),
  ]);
  return a + b;
}
```

`setTimeout` agenda um callback. O código síncrono termina antes dos callbacks assíncronos serem executados. Em aplicações reais, cuide de erros, cancelamento e tempo limite.

## fetch e HTTP

`fetch` faz requisições e retorna uma Promise de `Response`. Um status HTTP 404 **não** rejeita a Promise automaticamente; confira `response.ok` antes de ler `response.json()`. Requisições podem ser canceladas com `AbortController`. Em aplicações web, credenciais e chaves secretas não devem ficar no código enviado ao navegador.

## Experimente

Execute [06-assincronia.js](../examples/06-assincronia.js). Ele usa uma URL `data:` local para demonstrar `fetch`, sem acesso à rede. Troque o JSON por texto inválido e observe o erro. Inverta a ordem dos `console.log` e compare com a ordem real da saída.
