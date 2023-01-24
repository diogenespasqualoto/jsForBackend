import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso ${curso}`
    }
}
    
const novoDocente = new Docente('Diógnees', ' d@d.com', '2002-02-02')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Diógenes', 'JS'))