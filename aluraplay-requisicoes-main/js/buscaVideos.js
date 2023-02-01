

const pesquisa = document.querySelector('#pesquisar')

pesquisa.addEventListener("input", pesquisar)


function pesquisar() {
    console.log(this.value)
    var videos = document.querySelectorAll('.videos__item')
    if (this.value.length > 0) {
        videos.forEach(video => {
            var buscar = new RegExp(this.value, 'i')
            if (!buscar.test(video.innerText)) {
                video.style.display = 'none'
            } else {
                video.style.display = 'block'
            }
        });
    } else {
        videos.forEach(video => {    
            video.style.display = 'block'
        });
    }
}
