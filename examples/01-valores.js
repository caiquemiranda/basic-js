const saudacao = "Olá, JavaScript!";
let visitas = 1;
visitas += 1;

console.log(saudacao);
console.log(`Visitas: ${visitas}`);
console.log("Ambiente:", typeof document === "undefined" ? "Node.js" : "navegador");
