import {cards} from './animacao.js'
import {Icones} from './icones.js'
import {Footer} from './Footer.js'

window.onload = () => {
    const animaCards = new cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))

    const icones = new Icones()
    icones.animaIcones()

    const footer = new Footer()
    footer.efeitoOnda()

}

