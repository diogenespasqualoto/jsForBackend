// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//     aliado: {
//         nome: "Saruman",
//         classe: "mago"
//     },
//     status: "desaparecido"
// }

// delete objPersonagem.aliado
// delete objPersonagem["status"]


// console.log(objPersonagem.aliado) //

// const delProp = delete objPersonagem.aliado
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true

const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES",
}

pessoa.seguroSocial = "38283".substring(0, 4);
pessoa.cpf = "999.999.999-99".substring(0, 4);

console.log(pessoa) 