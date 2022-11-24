var campoFiltro = document.querySelector("#ifiltro")
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll('.paciente')
    if (campoFiltro.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var cara = pacientes[i]
            var nome = cara.querySelector(".info-nome").innerText
            var expressao = new RegExp(campoFiltro.value,"i")
            if (!expressao.test(nome)) {
                cara.classList.add('filtrado')    
            } else {
                cara.classList.remove('filtrado')
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var cara = pacientes[i]
            cara.classList.remove('filtrado')
        }    
    }
})