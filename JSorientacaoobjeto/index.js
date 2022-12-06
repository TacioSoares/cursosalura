

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.cliente = cliente1

contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.cliente = cliente1



console.log(contaCorrenteAlice.cliente)