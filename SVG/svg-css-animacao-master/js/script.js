import {cards} from './animacao.js'

window.onload = () => {
    let animaCards = new cards()
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))
}
