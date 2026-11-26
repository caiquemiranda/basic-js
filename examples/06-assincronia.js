import { media } from "../src/math.js";

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function carregarNotas() {
  await esperar(10);
  const resposta = await fetch("data:application/json,%7B%22notas%22%3A%5B7%2C8%2C9%5D%7D");
  if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
  const dados = await resposta.json();
  if (!Array.isArray(dados.notas)) throw new TypeError("Notas ausentes.");
  return dados.notas;
}

console.log("1. início síncrono");
try {
  const [notas, bonus] = await Promise.all([carregarNotas(), Promise.resolve(1)]);
  console.log("2. média com bônus:", media(notas) + bonus);
} catch (erro) {
  console.error("Falha ao carregar notas:", erro.message);
}
console.log("3. fim");
