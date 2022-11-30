class ContaCorrente {
    agencia;
    saldo = 1000
    
    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor
            return valor
        } else {
            return console.log('Valor extrapola o saldo da conta')
        }
    }
    depositar(valor) {
        if (valor > 0){
            this.saldo += valor
            console.log(this.saldo)
        }    
    }
}