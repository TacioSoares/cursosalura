var adicionar = document.querySelector("#adicionar-paciente")
adicionar.addEventListener("click", add)

function add(event) {

// evita comportamento padrão do botão do form   
    event.preventDefault()

// coleta dados do paciente
   var paciente = obtempaciente()

// cria a tr e td com o paciente
    var trpaciente = criaTreTd(paciente)

// validar o paciente e adicionar tr e td dentro da tabela de clientes
    if (validapaciente(paciente)) {
        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(trpaciente)
        var form = document.querySelector("#form-adiciona")
        form.reset()
        var erro = document.querySelector("#erro")
        erro.innerHTML = ""

        // adicionaOpcao(paciente)
    }    
}

function obtempaciente(){

    var paciente = {
        nome: document.querySelector("#nome").value,
        peso: document.querySelector("#peso").value,
        altura: document.querySelector("#altura").value,
        gordura: document.querySelector("#gordura").value,
        imc: calculaImc(document.querySelector("#peso").value,document.querySelector("#altura").value)
    }
    return paciente
}
function criaTreTd(paciente) {

    var trpaciente = document.createElement('tr')
    trpaciente.setAttribute('class', 'paciente')
    var tdnome = document.createElement('td')
    tdnome.setAttribute('class', 'info-nome')
    tdnome.innerHTML = paciente.nome
    var tdpeso = document.createElement('td')
    tdpeso.setAttribute('class', 'info-peso')
    tdpeso.innerHTML = paciente.peso
    var tdaltura = document.createElement('td')
    tdaltura.setAttribute('class', 'info-altura')
    tdaltura.innerHTML = paciente.altura
    var tdgordura = document.createElement('td')
    tdgordura.setAttribute('class', 'info-gordura')
    tdgordura.innerHTML = paciente.gordura
    var tdimc = document.createElement('td')
    tdimc.setAttribute('class', 'info-imc')
    tdimc.innerHTML = paciente.imc

    trpaciente.appendChild(tdnome)
    trpaciente.appendChild(tdpeso)
    trpaciente.appendChild(tdaltura)
    trpaciente.appendChild(tdgordura)
    trpaciente.appendChild(tdimc)

    return trpaciente
}
function validapaciente(paciente) {
    if (paciente.peso > 100 || paciente.peso < 0 || paciente.peso == '') {
        var erro = document.querySelector("#erro")
        erro.innerHTML = "Peso inválido"
        return false
    } else if (paciente.altura > 4.00 || paciente.altura < 0 || paciente.altura == '') {
        var erro = document.querySelector("#erro")
        erro.innerHTML = "Altura inválida"
        return false
    } else if (paciente.nome == '') { 
        var erro = document.querySelector("#erro")
        erro.innerHTML = "Informe o nome do paciente!"
        return false
    } else if (paciente.gordura == '') { 
        var erro = document.querySelector("#erro")
        erro.innerHTML = "Informe o percentual de gordura do paciente!"
        return false 
    } else {
        return true
    }
}
/*
function adicionaOpcao(paciente) {
    var op = document.createElement('option')
    op.setAttribute('value',`${paciente.nome}`)
    op.innerHTML = paciente.nome
    var selecao = document.querySelector("#iclientes")
    selecao.appendChild(op)
}
*/
function adicionandoPacienteDoJSON(paciente) {
    
    var trpaciente = criaTreTd(paciente)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(trpaciente)
}