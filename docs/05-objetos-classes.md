# 05 · Objetos, JSON e classes

Objetos agrupam dados nomeados. Arrays também são objetos, mas representam sequências. Objetos e arrays são comparados por referência: dois literais com o mesmo conteúdo não são `===`.

## Campos, métodos e desestruturação

```js
const pessoa = {
  nome: "Ana",
  estudos: ["JS", "HTML"],
  apresentar() { return `Olá, sou ${this.nome}`; },
};
const { nome, estudos: assuntos } = pessoa;
console.log(nome, assuntos, pessoa.apresentar());
console.log(pessoa?.endereco?.cidade ?? "não informado");
```

Acesso por colchetes, `pessoa["nome"]`, é útil quando o nome do campo é dinâmico. `Object.keys`, `Object.values` e `Object.entries` ajudam a percorrer campos próprios enumeráveis. Evite usar entradas não validadas diretamente como chaves em objetos de configuração.

## Referências, cópias e JSON

```js
const original = { perfil: { nome: "Ana" } };
const rasa = { ...original };
rasa.perfil.nome = "Bia";
console.log(original.perfil.nome); // Bia: o objeto interno é compartilhado
const profunda = structuredClone(original);
```

`structuredClone` copia muitos dados estruturados, mas não funções. JSON é um formato de troca de dados: `JSON.stringify` serializa e `JSON.parse` lê texto. A sintaxe JSON não aceita comentários ou funções. Trate conteúdo externo como entrada não confiável e valide sua estrutura após `JSON.parse`.

## Protótipos e classes

Objetos podem herdar comportamento de outro objeto por meio da cadeia de protótipos. `class` oferece uma sintaxe mais clara para construtores e métodos, mas não substitui esse mecanismo.

```js
class Curso {
  #alunos = new Set();
  constructor(nome) { this.nome = nome; }
  matricular(aluno) { this.#alunos.add(aluno); }
  get total() { return this.#alunos.size; }
}
```

`#alunos` é um campo privado. `this` depende da forma de chamada de um método comum; evite destacá-lo sem fazer `bind` ou envolvê-lo em uma função. Composição de objetos costuma ser mais simples que uma hierarquia profunda de herança.

## Experimente

Execute [05-objetos.js](../examples/05-objetos.js). Compare dois objetos literais e depois duas referências ao mesmo objeto. Converta um registro em JSON e leia de volta.
