import { media } from "../src/math.js";

const notas = [10, 2, 7, 9];
console.log("ordenado sem mutação:", notas.toSorted((a, b) => a - b));
console.log("original:", notas);
console.log("aprovadas:", notas.filter((nota) => nota >= 7));
console.log("média:", media(notas));

const palavras = ["js", "web", "js"];
console.log("sem duplicatas:", [...new Set(palavras)]);

const contagem = new Map();
for (const palavra of palavras) {
  contagem.set(palavra, (contagem.get(palavra) ?? 0) + 1);
}
console.log("frequências:", [...contagem]);

const preco = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
console.log("formatação:", preco.format(1234.5));
console.log("texto:", "  JavaScript básico  ".trim().toLowerCase());
