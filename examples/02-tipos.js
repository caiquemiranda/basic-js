const valores = ["texto", 42, 42n, true, undefined, Symbol("id"), null, {}];

for (const valor of valores) {
  console.log(String(valor), "=>", typeof valor);
}

console.log("null é nulo:", valores[6] === null);
console.log("array:", Array.isArray([]));
console.log("igualdade estrita:", "5" === 5, Number("5") === 5);
console.log("entrada inválida:", Number.isNaN(Number("abc")));
console.log("objeto vazio é truthy:", Boolean({}));

const opcoes = { tentativas: 0, perfil: null };
console.log("|| perde zero:", opcoes.tentativas || 3);
console.log("?? preserva zero:", opcoes.tentativas ?? 3);
console.log("acesso opcional:", opcoes.perfil?.nome ?? "visitante");
