var board = ['', '', '', '', '', '', '', '', '']
var playerTurn = 0
var symbols = ['x', 'o']
var winnedPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function play(i) {
    if (!checkWin() && !checkPlayed(i)) {
        board[i] = symbols[playerTurn]
        playerTurn = (playerTurn == 0) ? 1 : 0
        if (checkWin()) {
            window.console.log("Game is over")
        }
        return true
    }
}

function checkPlayed(i) {
    if (board[i] == '') {
        return false
    } else {
        return true
    }
}

function checkWin() {
    for (let i = 0; i < winnedPositions.length; i++) {
        let winnedPosition = winnedPositions[i]
        if (board[winnedPosition[0]] == board[winnedPosition[1]] &&
            board[winnedPosition[0]] == board[winnedPosition[2]] &&
            board[winnedPosition[0]] != '') {
            return true
        }
    }
    return false
}