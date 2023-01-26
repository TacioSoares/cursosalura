async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaojson = await conexao.json()
    return conexaojson
}

export const conectaApi = {
    listaVideos
}    
