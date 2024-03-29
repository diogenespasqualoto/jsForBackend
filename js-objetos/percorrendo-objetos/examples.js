// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
// }

// const equipoGuerreiro = {
//     espada: "Andúril",
//     capa: "capa élfica +2"
// }
// const guerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
// }

// const mago = {
//     nome: "Gandalf",
//     classe: "mago"
// }

// const ranger = {
//     nome: "Legolas",
//     classe: "ranger"
// }

// const personagens = { ...mago, ...guerreiro, ...ranger }
// console.log(personagens)


// FORMAS DE ITERAR sobre um obejeto codigo com relação da aula de repetição


const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }
  
  ligaParaCliente(...cliente.telefone);
  
  const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
  };
  
  console.log(encomenda);