const pessoa = {
  nome: "Ana",
  estudos: ["JS", "HTML"],
  apresentar() { return `Olá, sou ${this.nome}`; },
};

const { nome, estudos: assuntos } = pessoa;
console.log(nome, assuntos, pessoa.apresentar());
console.log("comparação por referência:", {} === {});
console.log("mesma referência:", pessoa === pessoa);

const copia = structuredClone(pessoa.estudos);
copia.push("CSS");
console.log("original e cópia:", pessoa.estudos, copia);

class Curso {
  #alunos = new Set();

  constructor(nomeDoCurso) {
    this.nome = nomeDoCurso;
  }

  matricular(aluno) {
    this.#alunos.add(aluno);
  }

  get total() {
    return this.#alunos.size;
  }
}

const curso = new Curso("JavaScript");
curso.matricular("Ana");
curso.matricular("Ana");
console.log("curso:", curso.nome, curso.total);

const json = JSON.stringify({ curso: curso.nome, alunos: curso.total });
console.log("JSON:", json, JSON.parse(json).alunos);
