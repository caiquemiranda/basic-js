# Laboratórios temáticos

Quinze exercícios com solução em JavaScript moderno e testes de comportamento. Cada tema foi desenvolvido em dois commits: um com o código e outro com os testes. Use `git log --oneline -- labs/ test/` para percorrer a evolução.

## Como praticar

1. Leia o desafio abaixo e tente escrever sua própria versão antes de abrir a solução.
2. Compare entradas, saídas e decisões de validação com o arquivo em `labs/`.
3. Execute apenas o teste do tema: `node test/lab-01-entrada.test.js`. Para tudo, use `npm test`.
4. Altere uma regra, acrescente um caso de borda e veja o teste falhar e voltar a passar.

As funções exportadas podem ser importadas em outros módulos. Por exemplo:

```js
import { lerNota } from "./fundamentos/01-entrada.js";
console.log(lerNota("7,5")); // 7.5
```

O trecho acima deve ser salvo em um arquivo dentro de `labs/` ou ter o caminho de importação ajustado. Os testes são exemplos completos de uso.

## Fundamentos

| Tema | Desafio | Solução | Testes |
| --- | --- | --- | --- |
| 01 · Entrada | Aceitar nota decimal com vírgula ou ponto e rejeitar entrada ambígua | [Código](fundamentos/01-entrada.js) | [Teste](../test/lab-01-entrada.test.js) |
| 02 · Estatísticas | Calcular mínimo, máximo, média e mediana sem alterar a lista | [Código](fundamentos/02-estatisticas.js) | [Teste](../test/lab-02-estatisticas.test.js) |
| 03 · Texto | Contar palavras Unicode e reconhecer palíndromos com acentos | [Código](fundamentos/03-texto.js) | [Teste](../test/lab-03-texto.test.js) |
| 04 · Agrupamento | Agrupar registros por chave dinâmica e contar grupos | [Código](fundamentos/04-agrupamento.js) | [Teste](../test/lab-04-agrupamento.test.js) |
| 05 · Árvore | Percorrer nós recursivamente e detectar ciclos | [Código](fundamentos/05-arvore.js) | [Teste](../test/lab-05-arvore.test.js) |

**Perguntas para revisão:** por que `Number("")` exige cuidado? O que muda na mediana de uma lista par? Por que `Map` evita colisões com nomes como `toString`? Qual é a condição de parada de uma função recursiva?

## Pequenos projetos

| Tema | Desafio | Solução | Testes |
| --- | --- | --- | --- |
| 06 · Tarefas | Criar, concluir e remover tarefas mantendo versões anteriores | [Código](projetos/06-tarefas.js) | [Teste](../test/lab-06-tarefas.test.js) |
| 07 · Carrinho | Somar produtos em centavos e combinar quantidades | [Código](projetos/07-carrinho.js) | [Teste](../test/lab-07-carrinho.test.js) |
| 08 · Estoque | Registrar entradas e saídas sem permitir quantidade negativa | [Código](projetos/08-estoque.js) | [Teste](../test/lab-08-estoque.test.js) |
| 09 · Turma | Gerar boletim ordenado e resumo de aprovação | [Código](projetos/09-turma.js) | [Teste](../test/lab-09-turma.test.js) |
| 10 · Quiz | Corrigir alternativas e identificar respostas ausentes | [Código](projetos/10-quiz.js) | [Teste](../test/lab-10-quiz.test.js) |

Esses projetos concentram regras de domínio em funções puras. Isso facilita testar resultados sem precisar de interface ou banco de dados. O carrinho trabalha em **centavos inteiros** para evitar erros comuns de ponto flutuante em valores monetários; é um exemplo de modelagem, não um sistema de pagamentos.

**Experimente:** acrescente prazo às tarefas, limite máximo ao estoque, média ponderada ao boletim ou feedback textual ao quiz. Escreva primeiro o teste para o novo comportamento.

## Aplicações didáticas de IA

| Tema | Desafio | Solução | Testes |
| --- | --- | --- | --- |
| 11 · Divisão de dados | Separar treino e teste com embaralhamento reproduzível | [Código](ia/11-divisao-dados.js) | [Teste](../test/lab-11-divisao-dados.test.js) |
| 12 · Métricas | Construir matriz de confusão, precisão, revocação e F1 | [Código](ia/12-metricas.js) | [Teste](../test/lab-12-metricas.test.js) |
| 13 · Naive Bayes | Classificar texto por contagem de termos e suavização | [Código](ia/13-naive-bayes.js) | [Teste](../test/lab-13-naive-bayes.test.js) |
| 14 · k-means | Agrupar pontos em torno de centros por iteração | [Código](ia/14-kmeans.js) | [Teste](../test/lab-14-kmeans.test.js) |
| 15 · Perceptron | Aprender uma fronteira linear para rótulos binários | [Código](ia/15-perceptron.js) | [Teste](../test/lab-15-perceptron.test.js) |

A divisão usa um gerador pseudoaleatório com semente apenas para **reprodutibilidade didática**; não é criptograficamente seguro. Divida os dados **antes** de aprender parâmetros de preparação para evitar vazamento. Métricas diferentes respondem perguntas diferentes: acurácia pode esconder falhas em classes raras. Naive Bayes assume independência condicional dos termos; k-means depende da escala e de `k`; o perceptron só aprende separações lineares. Nenhum exemplo deve ser usado sem validação de dados, avaliação fora do treino e revisão do contexto de uso.

**Experimente:** compare duas sementes na divisão, crie uma matriz com classe desbalanceada, adicione textos de teste ao Naive Bayes, mude `k` no k-means e tente a porta lógica OU no perceptron. Depois teste XOR e explique por que uma única fronteira linear não resolve o problema.

## Próximo passo

Escolha um projeto e crie uma interface para ele. Mantenha as regras em módulos puros, leia entrada do DOM, mostre resultados com `textContent` e escreva testes para os casos que podem falhar.
