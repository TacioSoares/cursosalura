
var incep = document.querySelector('#cep')
incep.addEventListener('focusout', () => buscaEndereço(incep.value))
async function buscaEndereço(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepJSON = await consultaCep.json()
        if (consultaCepJSON.erro) {
            throw Error ('CEP inválido')
        }
        var campos = await pegaCampos()
        await preencheCampos(consultaCepJSON,campos)
        console.log(consultaCepJSON)
    } catch (erro) {
        window.alert('CEP Inválido')
        camposVazios()
    }    
}

function pegaCampos() {
    var campos = [document.querySelector('#endereco'),document.querySelector('#bairro'),document.querySelector('#cidade'),document.querySelector('#estado')]
    return campos
}
function preencheCampos(informacoes,campos) {
    console.log(campos[0])
    campos[0].value = informacoes.logradouro
    campos[1].value = informacoes.bairro
    campos[2].value = informacoes.localidade
    campos[3].value = informacoes.uf
    return campos
}

function camposVazios() {
    var campos = [document.querySelector('#endereco'),document.querySelector('#bairro'),document.querySelector('#cidade'),document.querySelector('#estado')]

}