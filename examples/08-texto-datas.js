const nome = "  JavaScript básico  ";
console.log("limpeza:", nome.trim().toUpperCase());
console.log("fatia:", nome.trim().slice(0, 10));
console.log("template:", `Estudo: ${nome.trim()}`);

const frase = "Ação e reação: 2 ideias.";
console.log("termos Unicode:", frase.match(/[\p{L}\p{N}]+/gu));

const valor = 1234.5;
console.log("número:", new Intl.NumberFormat("pt-BR").format(valor));
console.log("moeda:", new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(valor));

const instante = new Date("2026-01-15T12:00:00Z");
console.log("ISO em UTC:", instante.toISOString());
console.log("data local:", new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "long",
  timeZone: "America/Sao_Paulo",
}).format(instante));
