const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        );
        cliente.endereco.apartamento === true
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);