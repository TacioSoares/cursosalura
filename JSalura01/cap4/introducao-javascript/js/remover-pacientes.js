var aluno1 = document.querySelector("#primeiro-paciente")
aluno1.addEventListener("dblclick", remove)

function remove() {
    if (window.confirm('Deseja deletar?')) {
        console.log('Removido')
    } else {
        console.log('De boa')
    }
}