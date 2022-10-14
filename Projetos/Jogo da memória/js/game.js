let game = {
    icons: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],

    cards: [],
    lockMode: false,
    card1: null,
    card2: null,

    startGame: function () {
        this.cards = []
        this.createCards()
        this.clearCards()
    },

    // cria as cartas embaralhadas

    createCards: function () {
        for (icon of this.icons) {
            this.cards.push(this.createCard(icon))
        }
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
    },

    createCard: function (icon) {
        return [{
            id: this.createId(icon),
            icon: icon,
            flipped: false
        }, {
            id: this.createId(icon),
            icon: icon,
            flipped: false
        }]
    },

    createId: function (icon) {
        return icon + Math.floor(Math.random() * 1000)
    },

    /*       c/ 'while'
        shuffleCards: function () {
            let i = this.cards.length
            let r;
            while (i > 0) {
                r = Math.floor(Math.random() * i)
                i--;
                [this.cards[i], this.cards[r]] = [this.cards[r], this.cards[i]]
            }
        },
     */

    shuffleCards: function () {
        let r;
        for (let i = this.cards.length - 1; i >= 0; i--) {
            r = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[r]] = [this.cards[r], this.cards[i]];
        }
    },

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false
        }

        if (!this.card1) {
            this.card1 = card
            this.card1.flipped = true
            return true
        } else {
            this.card2 = card
            this.card2.flipped = true
            this.lockMode = true
            return true
        }
    },

    checkMatch: function () {
        return this.card1.icon === this.card2.icon
    },

    clearCards: function () {
        this.card1 = null
        this.card2 = null
        this.lockMode = false
    },

    unflipCards: function () {
        this.card1.flipped = false
        this.card2.flipped = false
    },

    checkWin: function () {
        let win = this.cards.filter(card=>card.flipped===false)
        if (win.length == 0) {
            return true
        }
        return false
    },
}

game.startGame()

setInterval(() => {
    console.log(game.lockMode)
}, 1000)