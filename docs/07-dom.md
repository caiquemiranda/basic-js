# 07 · DOM, eventos e formulários

O **DOM** representa o documento HTML como uma árvore de nós. O JavaScript do navegador pode localizar elementos, ler entradas e alterar o conteúdo mostrado na página. Este capítulo usa a [página interativa](../index.html). Inicie com `npm run web` e abra `http://127.0.0.1:8000/`; módulos ES precisam ser servidos por HTTP em navegadores comuns.

## Do HTML ao evento

```js
const formulario = document.querySelector("#form-nota");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita o recarregamento padrão
  const dados = new FormData(formulario);
  console.log(dados.get("nota"));
});
```

`querySelector` devolve o primeiro elemento correspondente ou `null`. Se o HTML pode variar, confira o resultado antes de usar. `addEventListener` permite registrar handlers sem misturar código com atributos HTML.

## Atualize sem inserir HTML arbitrário

```js
const item = document.createElement("li");
item.textContent = entradaDoUsuario;
lista.append(item);
```

Use `textContent` para texto fornecido pelo usuário. `innerHTML` interpreta marcação e pode introduzir injeção de código quando recebe conteúdo não confiável. Validação HTML (`required`, `min`, `max`) ajuda a experiência, mas a lógica também deve validar dados quando necessário.

## Estado e renderização

Na lista de assuntos, o array `assuntos` guarda o estado. O DOM reflete as ações de adicionar e remover. Em projetos maiores, crie uma função de renderização que derive a interface do estado inteiro para evitar divergências. Aqui cada evento atualiza apenas o item afetado.

## Experimente

1. Rode `npm run web`, abra a URL indicada e classifique notas 4, 6 e 9.
2. Adicione e remova assuntos; veja a contagem mudar.
3. Digite `7, 8, texto` no cálculo da média e observe a mensagem de erro.
4. Abra o console e inspecione `document.querySelector("#lista-assuntos").children`.

**Ambiente:** este exemplo precisa de navegador. `node web/app.js` não funciona porque Node.js não fornece `document`.
