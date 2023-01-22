const user = {
    nome: "Diógenes",
    email: "d@d.com",
    nascimento: "16/12/2002",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}
const admin = {
    nome: "Katia",
    email: "k@k.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!");
    }
}


Object.setPrototypeOf(admin, user);
admin.criarCurso()
admin.exibirInfos()

const exibir = function () {
    console.log(this.nome)
}

const exibirNome = exibir.bind(user)
exibirNome()
exibir()
