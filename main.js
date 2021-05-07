let boxes = document.querySelectorAll("div")
let playerOneStatus = true
let row1Values, row2Values, row3Values, column1Values, column2Values, column3Values, diagonalsValues
let counter = 0
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(event) {
        alternatePlayer(event)
        row1Values = getRowValues(document.querySelectorAll(".a"))
        row2Values = getRowValues(document.querySelectorAll(".b"))
        row3Values = getRowValues(document.querySelectorAll(".c"))
        column1Values = getColumnValues(document.querySelectorAll(".x"))
        column2Values = getColumnValues(document.querySelectorAll(".y"))
        column3Values = getColumnValues(document.querySelectorAll(".z"))
        diagonalsValues = getDiagonalValues(document.querySelectorAll('div'))
        threeInADiagonal(diagonalsValues[0])
        threeInADiagonal(diagonalsValues[1])
        threeInARow(row1Values)
        threeInARow(row2Values)
        threeInARow(row3Values)
        threeInAColumn(column1Values)
        threeInAColumn(column2Values)
        threeInAColumn(column3Values)
        counter++
        if (counter === 9) {
            alert("draw!")
        }
    })
}

// Get Row Elements and Three in a Row
function getRowValues(rowElements) {
    let rowArray = []

    for (let i = 0; i < rowElements.length; i++) {
        rowArray.push(rowElements[i].innerText)
    }

    return rowArray // gives the array back to be used later

}
function threeInARow(array) {
    let rowCheck = true

    for (let i = 0; i < array.length; i++) {
        if (array[0] !== array[i] || array[i] === '') {
            rowCheck = false
        }
    }

    if (rowCheck) {
        alert("There is 3 in a row")
    }

}


// Get Column Elements and Three in a Column
function getColumnValues(columnElements) {
    let columnArray = []

    for (let i = 0; i < columnElements.length; i++) {
        columnArray.push(columnElements[i].textContent)
    }

    return columnArray // gives the array back to be used later
}

function threeInAColumn(array) {
    let columnCheck = true

    for (let i = 0; i < array.length; i++) {
        if (array[0] !== array[i] || array[i] === '') {
            columnCheck = false
            break
        } 
    }
    if (columnCheck) {
        alert("There is 3 in a column")
    }
}


// Get Diagonal Elements and Three in a Diagonal
function getDiagonalValues(div) {
    let diagonalArray = []
    let diagonalOneArray = []
    let diagonalTwoArray = []

    for (let i = 0; i < div.length; i++) {

        if (div[i].className === "a x" || div[i].className === "b y" || div[i].className === "c z") {
            diagonalOneArray.push(div[i].innerText)

        } if (div[i].className === "a z" || div[i].className === "b y" || div[i].className === "c x") {
            diagonalTwoArray.push(div[i].innerText)
        }
    }
    diagonalArray.push(diagonalOneArray)
    diagonalArray.push(diagonalTwoArray)
    return diagonalArray
}
function threeInADiagonal(array) {
    let diagonalCheck = true
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[0] || array[i] === '') {
            diagonalCheck = false
        }
    }
    if (diagonalCheck) {
        alert("three in a diagonal")
    }

}








// Able to alternate player and prevent player from clicking a taken spot
function alternatePlayer(event) {
    console.log(playerOneStatus)
    if (playerOneStatus) {
        if (event.target.innerText == "X" || event.target.innerText == "O") {
            alert("something here")
        } else {
            event.target.innerText = "X"
            //let x = document.createElement("p")
            //x.setAttribute("id", "playerX")
            //x.innerHTML = "X"
            //event.target.appendChild(x)
            document.querySelector("h2").innerText = "Player Two's Turn"
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
            document.querySelector("h2").innerText = "Player One's Turn"
            playerOneStatus = true
        }
    }
}