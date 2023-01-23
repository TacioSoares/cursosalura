

var cep = 18110382
async function buscaEndereço(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepJSON = await consultaCep.json()
        if (consultaCepJSON.erro) {
            throw Error ('CEP inválido')
        }
        console.log(consultaCepJSON)
    } catch (erro) {
        console.log(erro)
    }    
}

buscaEndereço(cep)