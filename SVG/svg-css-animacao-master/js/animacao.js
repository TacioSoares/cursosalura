class cards {
    constructor() {
        this.posicaoSectionDicas = document.querySelector('#secDicas')
        this.cardEsq = document.querySelector('.card-esq') 
        this.cardDir = document.querySelector('.card-dir') 
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this))
    }

    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y']
        console.log(posicao)
        if (posicao >= 2) {
            this.cardEsq.style.transform = `translate(-${(posicao +2)/10}%)`
            this.cardDir.style.transform = `translate(${(posicao -2)/10}%)`
        }
            /*var cardEsq = document.querySelector('.card-esq') 
            var cardDir = document.querySelector('.card-dir') 
            cardEsq.style.animation = 'movimento-card-dir 4s ease-in-out forwards'
            cardDir.style.animation = 'movimento-card-esq 4s ease-in-out forwards'*/
        
    }
}

export { cards }
