
var tabela = document.querySelector("#tabela-pacientes")
tabela.addEventListener("dblclick", function(event){
    if (window.confirm(`Deseja realmente remover o paciente?`)) {
        event.target.parentNode.classList.add("fadeOut")
        setTimeout(function(){
            event.target.parentNode.remove()
        }, 650)   
    }    
})
