const cliente = {
  nome: "Diógenes",
  idade: 20,
  email: "diogenes@pasqualoto.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  efetuaPagamento: function (valorDaContaDoCliente) {
    if (valorDaContaDoCliente > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      // Menos igual ou seja o saldo antigo - o valor da nova compra
      this.saldo -= valorDaContaDoCliente;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(25);