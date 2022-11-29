class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente()

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const cliente3 = new Cliente();

cliente3.nome = "Júlio";
cliente3.cpf = 44422233309;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1.nome)
console.log(cliente2.nome)
console.log(cliente3.nome)