# 01 · Ambientes e primeiros passos

JavaScript roda em diversos ambientes. O navegador oferece DOM, eventos e `fetch`. Node.js oferece arquivos, processos e um executor de testes. A sintaxe central é a mesma; as APIs do ambiente mudam.

## Primeiro programa

```js
console.log("Olá, JavaScript!");
```

No terminal: `node examples/01-valores.js`. No navegador: abra `index.html` e veja o console nas Ferramentas do Desenvolvedor (geralmente F12).

## Instruções, comentários e nomes

```js
const idioma = "pt-BR"; // comentário de uma linha
let tentativas = 0;
tentativas += 1;
```

Use `const` quando a ligação não precisa apontar para outro valor; use `let` quando precisa. Evite `var` em código novo, pois seu escopo e elevação dificultam a leitura. Nomes diferenciam maiúsculas de minúsculas: `nota` e `Nota` são variáveis distintas. Ponto e vírgula é recomendado aqui para reduzir ambiguidades.

## Módulos

Os exemplos usam `import` e `export`. O `"type": "module"` em `package.json` habilita módulos ES nos arquivos `.js` do Node.js. No navegador, o HTML usa `<script type="module">`. Caminhos relativos precisam da extensão `.js`.

```js
import { media } from "../src/math.js";
console.log(media([7, 8, 9]));
```

## Experimente

1. Troque a mensagem de `console.log` em [01-valores.js](../examples/01-valores.js).
2. Declare uma constante e tente reatribuí-la. Leia o erro.
3. Rode um arquivo de cada vez e observe que cada módulo tem seu próprio escopo.

**Pergunta de revisão:** por que `document.querySelector` não roda em um script simples do Node.js? Porque `document` é uma API do navegador, não parte do núcleo ECMAScript.
