var campoFiltro = document.querySelector("#ifiltro")
campoFiltro.addEventListener("input", function(){
    console.log(this.value)
    var pacientes = document.querySelectorAll('.paciente')
    for(var i = 0; i < pacientes.length; i++) {
        var cara = pacientes[i]
        var nome = cara.querySelector('.info-nome').textContent
        console.log(cara)
    }
})