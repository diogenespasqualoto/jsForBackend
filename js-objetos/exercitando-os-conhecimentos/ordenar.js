const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });
    return resultado
}

const ordenarNome=ordenar(clientes, "nome");
console.log(ordenarNome);


function ordenar(lista, param, ordem = "crescente") {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  if (ordem !== "crescente") {
    resultado.reverse();
  }

  return resultado;
}