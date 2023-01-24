import User from "./User.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso,vagas){
        return `Cruso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Diógenes', 'd@d.com', '2002-02-02')
console.log(novoAdmin.criarCurso('JS',23))