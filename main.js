// Initializing core variables i.e. the grid cells, the 3 rows, the 3 columns, the 2 diagonals
const boxes = document.querySelectorAll("div")
const gameStatus = document.querySelector("h2")
let playerOneStatus = true
let gameDraw = false
let winner = false

let row1Values, row2Values, row3Values, column1Values, column2Values, column3Values, diagonalsValues
let movesCounter = 0

// Overarching event handler for the game
// Adds an event listener to each grid cell
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", gamePlay)
}

// Get the values of each row, column and diagonal then uses the values to 
// determine if there are 3 X's or O's in a row, column or diagonal, or if neither player as won
function gamePlay(event) {

    // Alternate between player 1 and player 2
    alternatePlayer(event)

    // Get values of each row, column and diagonal
    row1Values = lineValues(document.querySelectorAll(".r1"))
    row2Values = lineValues(document.querySelectorAll(".r2"))
    row3Values = lineValues(document.querySelectorAll(".r3"))
    column1Values = lineValues(document.querySelectorAll(".c1"))
    column2Values = lineValues(document.querySelectorAll(".c2"))
    column3Values = lineValues(document.querySelectorAll(".c3"))
    diagonalsValues = getDiagonalValues(document.querySelectorAll('div'))

    // Determine if there are 3 of the same token in a row, column or diagonal
    threeInALine(diagonalsValues[0])
    threeInALine(diagonalsValues[1])
    threeInALine(row1Values)
    threeInALine(row2Values)
    threeInALine(row3Values)
    threeInALine(column1Values)
    threeInALine(column2Values)
    threeInALine(column3Values)

    // If the max number of moves (9) is reached and there is no winner, it is considered a draw
    movesCounter++
    if (winner === false && movesCounter === 9) {
        alert("draw!")
        gameStatus.innerText = "It's a draw! Play again?"
        endGame()
    }
}


/* Get Row/Column Elements and Determines if there are Three in a Row */
// Gets the values of each row and column of the board
function lineValues(rowOrColumnElements) {
    let lineArray = []

    for (let i = 0; i < rowOrColumnElements.length; i++) {
        lineArray.push(rowOrColumnElements[i].innerText)
    }

    return lineArray // gives the values of each Row and Column as an array
}

/* Gets Diagonal Elements and stores them as 2 arrays in an array */
// Groups 2 diagonals based on the row and column position, these diagonals are grouped into a Diagonals variable
function getDiagonalValues(divElements) {
    let diagonalArray = []
    let diagonalOneArray = []
    let diagonalTwoArray = []

    for (let i = 0; i < divElements.length; i++) {

        if (divElements[i].className === "r1 c1" || divElements[i].className === "r2 c2" || divElements[i].className === "r3 c3") {
            diagonalOneArray.push(divElements[i].innerText)

        } if (divElements[i].className === "r1 c3" || divElements[i].className === "r2 c2" || divElements[i].className === "r3 c1") {
            diagonalTwoArray.push(divElements[i].innerText)

        }
    }

    diagonalArray.push(diagonalOneArray)
    diagonalArray.push(diagonalTwoArray)
    return diagonalArray
}

// Checks if there are three of the same tokens in each Row, Column or Diagonal
function threeInALine(elementsArray) {
    let threeTokensCheck = true
    // Prevent reading blank cells as part of the array
    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[0] !== elementsArray[i] || elementsArray[i] === '') {
            threeTokensCheck = false
        }
    }

    if (threeTokensCheck) {
        if (playerOneStatus !== false) {
            winner = true
            alert("player two wins!")
            gameStatus.innerText = "Player Two Wins!"
        } else if (playerOneStatus === false) {
            winner = true
            alert("player one wins!")
            gameStatus.innerText = "Player One Wins!"
        }
        endGame()

    }

}

// Alternates between Player 1 and Player 2
// Prevents players from placing a token in a taken spot
function alternatePlayer(event) {
    if (playerOneStatus) {
        if (event.target.innerText === "X" || event.target.innerText === "O") {
            alert("something here")
        } else {
            let x = document.createElement("p")
            x.setAttribute("id", "playerX")
            x.innerHTML = "X"
            event.target.appendChild(x)
            gameStatus.innerText = "Player Two's Turn"
            playerOneStatus = false
        }
    } else if (playerOneStatus === false) {
        if (event.target.innerText === "X" || event.target.innerText === "O") {
            alert("something here")
        } else {
            let o = document.createElement("p")
            o.setAttribute("id", "playerO")
            o.innerHTML = "O"
            event.target.appendChild(o)
            gameStatus.innerText = "Player One's Turn"
            playerOneStatus = true
        }
    }
}

// Stops the game after a player has won or there is a draw
function endGame() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("click", gamePlay)
    }
}

// Allows button to reset the board and the game
const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", function () {
    for (i = 0; i < boxes.length; i++) {
        movesCounter = 0
        boxes[i].innerText = ''
        playerOneStatus = true
        winner = false
        gameStatus.innerText = "Player One's Turn"
        boxes[i].removeEventListener("click", gamePlay)
        boxes[i].addEventListener("click", gamePlay)
    }
})
