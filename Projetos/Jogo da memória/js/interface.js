const gameboard = document.getElementById('gameboard')
const gameover = document.getElementById('gameover')
const FRONT = 'card_front'
const BACK = 'card_back'
const CARD = 'card'
const FLIP = 'flip'

function doGameboard() {
game.cards.forEach(card => {
        let cardDiv = document.createElement('div')
        cardDiv.id = card.id
        cardDiv.classList.add(CARD)
        cardDiv.dataset.icon = card.icon
        createCardFace(FRONT, card, cardDiv)
        createCardFace(BACK, card, cardDiv)
        cardDiv.addEventListener('click',flipCard)
        gameboard.appendChild(cardDiv)
    })
}

function createCardFace(face, card, div) {
    let e = document.createElement('div')
    if (face === FRONT) {
        e.classList.add(FRONT)
        e.appendChild(createCardFrontImage(card.icon))
    } else {
        e.classList.add(BACK)
        e.innerHTML = '&lt;/&gt;'
    }
    div.appendChild(e)
}

function createCardFrontImage(icone) {
    let icon = document.createElement('img')
    icon.src = './images/' + icone + '.png'
    return icon
}

function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add(FLIP)
        if (game.card1 != null && game.card2 != null) {
            if (game.checkMatch()) {
                game.clearCards()
                if (game.checkWin()) {
                    gameover.style.display = 'flex'
                }
            } else {
                setTimeout(()=> {
                    game.unflipCards()
                    document.getElementById(game.card1.id).classList.remove(FLIP)
                    document.getElementById(game.card2.id).classList.remove(FLIP)
                    game.clearCards()
                }, 500)
                
            }
        }
    }
}

function playAgain() {
    game.startGame()
    gameover.style.display = 'none'
    gameboard.innerHTML = ''
    doGameboard()
}

doGameboard()