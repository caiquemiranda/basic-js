import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const rotas = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/web/app.js", ["web/app.js", "text/javascript; charset=utf-8"]],
  ["/web/style.css", ["web/style.css", "text/css; charset=utf-8"]],
  ["/src/fundamentos.js", ["src/fundamentos.js", "text/javascript; charset=utf-8"]],
  ["/src/math.js", ["src/math.js", "text/javascript; charset=utf-8"]],
  ["/src/ai.js", ["src/ai.js", "text/javascript; charset=utf-8"]],
  ["/README.md", ["README.md", "text/plain; charset=utf-8"]],
]);

const porta = Number(process.env.PORT ?? 8000);
if (!Number.isInteger(porta) || porta < 1 || porta > 65535) {
  throw new RangeError("PORT deve ser um número entre 1 e 65535.");
}

createServer(async (pedido, resposta) => {
  if (pedido.method !== "GET" && pedido.method !== "HEAD") {
    resposta.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }

  const rota = new URL(pedido.url, "http://localhost").pathname;
  const arquivo = rotas.get(rota);
  if (!arquivo) {
    resposta.writeHead(404).end("Página não encontrada.");
    return;
  }

  try {
    const dados = await readFile(new URL(`../${arquivo[0]}`, import.meta.url));
    resposta.writeHead(200, { "Content-Type": arquivo[1] });
    resposta.end(pedido.method === "HEAD" ? undefined : dados);
  } catch (erro) {
    console.error("Não foi possível ler o arquivo:", erro);
    resposta.writeHead(500).end("Erro ao carregar a página.");
  }
}).listen(porta, "127.0.0.1", () => {
  console.log(`Abra http://127.0.0.1:${porta}/ no navegador.`);
});
