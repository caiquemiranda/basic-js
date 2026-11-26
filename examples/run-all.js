const exemplos = [
  "01-valores.js",
  "02-tipos.js",
  "03-funcoes.js",
  "04-colecoes.js",
  "05-objetos.js",
  "06-assincronia.js",
  "07-ia.js",
  "08-texto-datas.js",
];

for (const arquivo of exemplos) {
  console.log(`\n=== ${arquivo} ===`);
  await import(`./${arquivo}`);
}
