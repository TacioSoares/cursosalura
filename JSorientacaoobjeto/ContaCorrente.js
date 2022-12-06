class ContaCorrente {
    static numeroDeContas = 0
    agencia;
    _cliente;
    _saldo = 0

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
    
    
    get saldo() {
        return this._saldo
    }

    constructor(agencia,cliente) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }
}