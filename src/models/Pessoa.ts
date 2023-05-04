class Pessoa {
    constructor(
        protected nome: string, protected idade: number
    ){}

    static dizerOlares(): void {
        console.log("Olares")
    }
}

class Aluno extends Pessoa {}

class Funcionario extends Pessoa {}

const aluno = new Aluno('Rafael', 38)

