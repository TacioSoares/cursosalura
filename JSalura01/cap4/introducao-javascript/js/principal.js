var pacientes = document.querySelectorAll(".paciente");
var adicionar = document.querySelector("#adicionar-paciente")
adicionar.addEventListener("click", add)

for(var i = 0; i < pacientes.length ; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }    
}
function add(event) {
    event.preventDefault()
    var novonome = document.querySelector("#nome").value
    var novopeso = document.querySelector("#peso").value
    var novaaltura = document.querySelector("#altura").value
    var novagordura = document.querySelector("#gordura").value
    var tabela = document.querySelector("#tabela-pacientes")
    var trpaciente = document.createElement('tr')
    trpaciente.setAttribute('class', 'paciente')
    var tdnome = document.createElement('td')
    tdnome.innerHTML = novonome
    var tdpeso = document.createElement('td')
    tdpeso.innerHTML = novopeso
    var tdaltura = document.createElement('td')
    tdaltura.innerHTML = novaaltura
    var tdgordura = document.createElement('td')
    tdgordura.innerHTML = novagordura
    var tdimc = document.createElement('td')
    tdimc.innerHTML = 0
    trpaciente.appendChild(tdnome)
    trpaciente.appendChild(tdpeso)
    trpaciente.appendChild(tdaltura)
    trpaciente.appendChild(tdgordura)
    trpaciente.appendChild(tdimc)
    tabela.appendChild(trpaciente)
}
