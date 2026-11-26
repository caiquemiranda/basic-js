import { situacao } from "../src/fundamentos.js";
import { media } from "../src/math.js";
import { classificarKNN } from "../src/ai.js";

const formNota = document.querySelector("#form-nota");
const resultadoNota = document.querySelector("#resultado-nota");
formNota.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nota = Number(new FormData(formNota).get("nota"));
  resultadoNota.textContent = `Situação: ${situacao(nota)}`;
});

const formAssunto = document.querySelector("#form-assunto");
const lista = document.querySelector("#lista-assuntos");
const total = document.querySelector("#total-assuntos");
const assuntos = [];

function atualizarTotal() {
  const quantidade = assuntos.length;
  total.textContent = quantidade + (quantidade === 1 ? " assunto" : " assuntos");
}

formAssunto.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const campo = formAssunto.elements.namedItem("assunto");
  const assunto = campo.value.trim();
  if (!assunto) return;
  assuntos.push(assunto);

  const item = document.createElement("li");
  const texto = document.createElement("span");
  texto.textContent = assunto;
  const remover = document.createElement("button");
  remover.type = "button";
  remover.textContent = "Remover";
  remover.setAttribute("aria-label", `Remover ${assunto}`);
  remover.addEventListener("click", () => {
    const indice = assuntos.indexOf(assunto);
    if (indice !== -1) assuntos.splice(indice, 1);
    item.remove();
    atualizarTotal();
  });
  item.append(texto, remover);
  lista.append(item);
  atualizarTotal();
  formAssunto.reset();
  campo.focus();
});

const formMedia = document.querySelector("#form-media");
const resultadoMedia = document.querySelector("#resultado-media");
formMedia.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = String(new FormData(formMedia).get("valores"));
  const partes = texto.split(",").map((parte) => parte.trim());
  if (partes.some((parte) => parte === "")) {
    resultadoMedia.textContent = "Informe números separados por vírgula.";
    return;
  }
  const valores = partes.map(Number);
  try {
    resultadoMedia.textContent = `Média: ${media(valores).toFixed(2)}`;
  } catch (erro) {
    resultadoMedia.textContent = erro.message;
  }
});

const formIA = document.querySelector("#form-ia");
const resultadoIA = document.querySelector("#resultado-ia");
const exemplosIA = [
  { valores: [0.1, 0.2], rotulo: "grupo A" },
  { valores: [0.2, 0.3], rotulo: "grupo A" },
  { valores: [0.8, 0.9], rotulo: "grupo B" },
  { valores: [0.9, 0.8], rotulo: "grupo B" },
];

formIA.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const dados = new FormData(formIA);
  const entrada = [Number(dados.get("a")), Number(dados.get("b"))];
  resultadoIA.textContent = "Classificação: " + classificarKNN(exemplosIA, entrada, 3);
});
