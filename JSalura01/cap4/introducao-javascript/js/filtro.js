var campoFiltro = document.querySelector("#ifiltro")
campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    var pacientes = document.querySelectorAll('.paciente')
    for(var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i]
        var nome = paciente.querySelector('.info-nome').textContent
        console.log(nome)
    }
})