class ContaCorrente {
    agencia;
    _cliente;

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor
            return valor
        } else {
            console.log('Valor extrapola o saldo da conta')
            return (false)
        }
    }
    depositar(valor) {
        if (valor > 0){
            this._saldo += valor
            console.log(this._saldo)
        }    
    }
    transferir(valor, conta) {
        if(this.sacar(valor) == valor) {
            conta.depositar(valor)
        } else {
            console.log('Saldo insuficiente')
        }
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }
    _saldo = 1000
    
    get saldo() {
        return this._saldo
    }
}