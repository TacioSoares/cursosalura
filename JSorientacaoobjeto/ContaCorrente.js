class ContaCorrente {
    agencia;
    cliente;

    saldo = 1000
    
    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor
            return valor
        } else {
            console.log('Valor extrapola o saldo da conta')
            return (false)
        }
    }
    depositar(valor) {
        if (valor > 0){
            this.saldo += valor
            console.log(this.saldo)
        }    
    }
    transferir(valor, conta) {
        if(this.sacar(valor) == valor) {
            conta.depositar(valor)
        } else {
            console.log('Saldo insuficiente')
        }
    }
}