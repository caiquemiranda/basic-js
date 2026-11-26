# 08 · Fundamentos de JavaScript aplicados à IA

IA é um campo amplo. Aprendizado de máquina usa dados para ajustar um modelo; modelos generativos são apenas uma parte desse campo. Os exemplos deste capítulo são **didáticos** e não são modelos prontos para decisões reais. Execute [07-ia.js](../examples/07-ia.js) e leia [src/ai.js](../src/ai.js).

## Do dado à previsão

Um fluxo simples é: coletar → validar → preparar → separar treino/teste → ajustar ou escolher um modelo → avaliar → usar em novos dados. Cada etapa usa fundamentos de JavaScript:

| Conceito | Uso em IA |
| --- | --- |
| Arrays | Guardar amostras e vetores de características |
| Objetos | Representar `{ valores, rotulo }` |
| `map`, `filter`, `reduce` | Transformar, selecionar e resumir dados |
| Funções | Encapsular distância, treinamento e previsão |
| Módulos | Separar preparação, modelo e interface |
| Promises e `fetch` | Buscar dados ou chamar uma API de inferência |
| Testes | Verificar resultados e entradas inválidas |

## Exemplo 1: escala dos dados

```js
normalizarMinMax([18, 30, 60]); // [0, 0.2857..., 1]
```

A fórmula é `(x - mínimo) / (máximo - mínimo)`. Se todos os valores são iguais, este exemplo retorna zeros para evitar divisão por zero. Em um projeto real, calcule mínimo e máximo **apenas no conjunto de treino** e aplique os mesmos parâmetros ao teste e aos novos dados. Calcular com o teste vaza informação para o treinamento.

## Exemplo 2: k vizinhos mais próximos (k-NN)

Cada amostra tem um vetor de características e um rótulo. Para classificar uma entrada, calcule a distância até cada amostra, selecione os `k` vizinhos mais próximos e conte os rótulos. O exemplo usa distância euclidiana e desempate determinístico.

```js
const dados = [
  { valores: [0, 0], rotulo: "A" },
  { valores: [0.1, 0], rotulo: "A" },
  { valores: [1, 1], rotulo: "B" },
];
classificarKNN(dados, [0.05, 0.02], 3); // "A"
```

Escalas importam: uma característica entre 0 e 10.000 pode dominar outra entre 0 e 1. Classes desbalanceadas e a escolha de `k` também afetam o resultado. Não avalie um classificador usando as mesmas amostras usadas como referência.

## Exemplo 3: regressão linear

Ajustamos a reta `y = inclinação × x + intercepto` a pares `[x, y]` por mínimos quadrados. A função `ajustarRegressaoLinear` calcula os parâmetros e fornece `prever(x)`. Dois pontos podem definir uma reta, mas não bastam para avaliar se o modelo generaliza. Com `[[1, 2], [2, 4], [3, 6]]`, a previsão para `x=4` é 8.

## Exemplo 4: texto como dados

`frequenciaTermos` divide texto em termos, transforma para minúsculas e conta ocorrências em um `Map`. É uma primeira representação numérica de texto, mas perde ordem, contexto, ironia e significado. Modelos de linguagem modernos usam representações e treinamento muito mais complexos.

## E uma API de IA generativa?

No navegador, `fetch` pode enviar um pedido para **seu servidor**, por exemplo `POST /api/inferir`; o servidor autentica e chama o serviço de IA. Nunca coloque uma chave secreta no JavaScript enviado ao navegador. O padrão de `async/await`, tratamento de erro e validação do JSON é o mesmo do [capítulo 06](06-modulos-assincronia.md).

## Avalie antes de confiar

Separe dados de treino e teste, compare com uma regra simples de base e conte acertos e erros por classe. Revise qualidade dos dados, privacidade e possíveis vieses. Uma previsão é uma estimativa com limites; os exemplos desta pasta mostram mecanismos básicos, não justificam uso em decisões de alto impacto.

## Experimente

1. Mude `k` entre 1 e 4 e observe a classe prevista.
2. Adicione um ponto fora da reta e veja a nova previsão.
3. Acrescente pontuação e acentos ao texto e inspecione a contagem.
4. Tente vetores de tamanhos diferentes e leia a mensagem de erro.
