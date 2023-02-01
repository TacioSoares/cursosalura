import { conectaApi } from "./conectaapi.js"

var formulario = document.querySelector('#data-formulario')

async function criarVideo(evento) {
    evento.preventDefault()
    const imagem = document.querySelector('#Imagem').value
    const url = document.querySelector('#url').value
    const titulo = document.querySelector('#Titulo').value
    const descricao = Math.floor(Math.random() * 10).toString()

    await conectaApi.criaVideo(titulo, descricao, url, imagem)
    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => criarVideo(evento))