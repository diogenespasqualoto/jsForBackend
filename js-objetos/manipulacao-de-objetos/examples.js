// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
// }

// const objPersonagem2 = objPersonagem
// objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem.nome) //Gandalf, o Cinzento
// console.log(objPersonagem2.nome) //Gandalf, o Cinzento


// let num = 50
// let num2 = num

// num2 = 100
// console.log(num) //50
// console.log(num2) //100

// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    }
   
//    const objPersonagem2 = Object.create(objPersonagem)
//    objPersonagem2.nome = "Gandalf, o Cinzento"
   
//    console.log(objPersonagem.nome) //Gandalf
//    console.log(objPersonagem2.nome) //Gandalf, o Cinzento

const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })