import { situacao } from "../src/fundamentos.js";
import { media } from "../src/math.js";

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
    total.textContent = `${assuntos.length} assunto(s)`;
  });
  item.append(texto, remover);
  lista.append(item);
  total.textContent = `${assuntos.length} assunto(s)`;
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
