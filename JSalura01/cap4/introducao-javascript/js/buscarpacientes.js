var botaoBuscar = document.querySelector('#buscar-paciente')
botaoBuscar.addEventListener('click', function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")
    xhr.send()
    xhr.addEventListener('load', function(){
        if (xhr.status == 200) {
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)

            pacientes.forEach(function(paciente) {
                adicionandoPacienteDoJSON(paciente)
            })
            var erro = document.querySelector("#errobusca")
            erro.innerHTML = ""
        } else {
            var erro = document.querySelector("#errobusca")
            erro.classList.add('erro')
            erro.innerHTML = "Erro na busca"
        }    
    })
})