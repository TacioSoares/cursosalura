

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.cliente = cliente1

contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.cliente = new Cliente()
contaCorrenteAlice.cliente.nome = 'Alice'
contaCorrenteAlice.cliente.cpf = 88822233309

console.log(contaCorrenteAlice)