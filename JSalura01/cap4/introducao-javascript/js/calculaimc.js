var pacientes = document.querySelectorAll(".paciente");

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
        var erro = document.querySelector("#erro")
        erro.innerHTML = 'Peso inválida'
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent += "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")
        var erro = document.querySelector("#erro")
        erro.innerHTML += 'Altura inválida'
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    }    
}

function calculaImc(peso,altura) {
    var imc = peso / ( altura * altura);    
    return imc.toFixed(2)
}