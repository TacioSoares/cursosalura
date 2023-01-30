async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos')
    const conexaojson = await conexao.json()
    return conexaojson
}

async function criaVideo(a,b,c,d) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: a,
            descrição: `${b} mil visualizações`,
            url: c,
            imagem: d
        })
    })
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo
}    
