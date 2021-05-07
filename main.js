// Initializing core variables i.e. the grid cells, the 3 rows, the 3 columns, the 2 diagonals
const boxes = document.querySelectorAll("div")
const gameStatus = document.querySelector("h2")
let playerOneStatus = true
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
    lineOfThree(diagonalsValues[0])
    lineOfThree(diagonalsValues[1])
    lineOfThree(row1Values)
    lineOfThree(row2Values)
    lineOfThree(row3Values)
    lineOfThree(column1Values)
    lineOfThree(column2Values)
    lineOfThree(column3Values)

    // If the max number of moves (9) is reached, it is considered a draw
    movesCounter++
    if (movesCounter === 9) {
        alert("draw!")
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
function getDiagonalValues(div) {
    let diagonalArray = []
    let diagonalOneArray = []
    let diagonalTwoArray = []

    for (let i = 0; i < div.length; i++) {

        if (div[i].className === "r1 c1" || div[i].className === "r2 c2" || div[i].className === "r3 c3") {
            diagonalOneArray.push(div[i].innerText)

        } if (div[i].className === "r1 c3" || div[i].className === "r2 c2" || div[i].className === "r3 c1") {
            diagonalTwoArray.push(div[i].innerText)
        }
    }

    diagonalArray.push(diagonalOneArray)
    diagonalArray.push(diagonalTwoArray)
    return diagonalArray
}

// Checks if there are three of the same tokens in each Row, Column or Diagonal
function lineOfThree(elementsArray) {
    let rowCheck = true

    for (let i = 0; i < elementsArray.length; i++) {
        if (elementsArray[0] !== elementsArray[i] || elementsArray[i] === '') {
            rowCheck = false
        }
    }

    if (rowCheck) {
        if (playerOneStatus !== false) {
            alert("player two wins!")
            gameStatus.innerText = "Player Two Wins!"

        } else {
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
        if (event.target.innerText == "X" || event.target.innerText == "O") {
            alert("something here")
        } else {
            event.target.innerText = "X"
            //let x = document.createElement("p")
            //x.setAttribute("id", "playerX")
            //x.innerHTML = "X"
            //event.target.appendChild(x)
            gameStatus.innerText = "Player Two's Turn"
            playerOneStatus = false
        }
    } else if (playerOneStatus === false) {
        if (event.target.innerText == "X" || event.target.innerText == "O") {
            alert("something here")
        } else {
            event.target.innerText = "O"
            //let o = document.createElement("p")
            //o.setAttribute("id", "playerO")
            //o.innerHTML = "O"
            //event.target.appendChild(o)
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
resetButton.addEventListener("click", function (event) {
    for (i = 0; i < boxes.length; i++) {
        movesCounter = 0
        boxes[i].innerText = ''
        playerOneStatus = true
        gameStatus.innerText = "Player One's Turn"
        boxes[i].removeEventListener("click", gamePlay)
        boxes[i].addEventListener("click", gamePlay)
    }
})
