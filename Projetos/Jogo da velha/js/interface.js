document.addEventListener('DOMContentLoaded', () => {
    var squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (play(square.id)) {
                square.innerHTML = `<div class="${symbols[playerTurn]}"</div>`
                if (checkWin()) {
                    setTimeout(() => {alert("O jogo acabou ! \n O vencedor foi: " + symbols[playerTurn].toUpperCase())}, 10)
                }
            }
        })
    });
})