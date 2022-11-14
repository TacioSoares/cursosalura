var adicionar = document.querySelector("#adicionar-paciente")
adicionar.addEventListener("click", add)

function add(event) {

    event.preventDefault()

    var paciente = obtempaciente()

    var trpaciente = document.createElement('tr')
    trpaciente.setAttribute('class', 'paciente')
    var tdnome = document.createElement('td')
    tdnome.innerHTML = paciente.nome
    var tdpeso = document.createElement('td')
    tdpeso.innerHTML = paciente.peso
    var tdaltura = document.createElement('td')
    tdaltura.innerHTML = paciente.altura
    var tdgordura = document.createElement('td')
    tdgordura.innerHTML = paciente.gordura
    var tdimc = document.createElement('td')
    tdimc.innerHTML = paciente.imc

    trpaciente.appendChild(tdnome)
    trpaciente.appendChild(tdpeso)
    trpaciente.appendChild(tdaltura)
    trpaciente.appendChild(tdgordura)
    trpaciente.appendChild(tdimc)
    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(trpaciente)
}

function obtempaciente(){

    var paciente = {
        nome: document.querySelector("#nome").value,
        peso: document.querySelector("#peso").value,
        altura: document.querySelector("#altura").value,
        gordura: document.querySelector("#gordura").value,
        imc: calculaImc(paciente.peso,paciente.altura)
    }
    return paciente
}