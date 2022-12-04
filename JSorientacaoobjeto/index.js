

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.cliente = cliente1

contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.cliente = cliente2

console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo)

contaCorrenteAlice.transferir(200,contaCorrenteRicardo)

console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo)