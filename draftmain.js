let boxes = document.querySelectorAll("div")
let playerOneStatus = true
let row1Values, row2Values, row3Values, column1Values, column2Values, column3Values, diagonal1Values
let diagonalArray = []

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function (event) {
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

  })
}

function threeInARow(array) {
  let rowCheck = true
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      rowCheck = false
    }
  }
  if (rowCheck) {
    console.log("There is 3 in a row")
  }

}
function threeInAColumn(array) {
  let columnCheck = true
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      columnCheck = false
    }
  }
  if (columnCheck) {
    console.log("There is 3 in a column")
  }
}
function threeInADiagonal(array) {
  let diagonalCheck = true
  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[0]) {
      diagonalCheck = false
    }
  }
  if (diagonalCheck) {
    console.log("three in a diagonal")
  }

}
// Get Row Elements
function getRowValues(rowElements) {
  let rowArray = []
  for (let i = 0; i < rowElements.length; i++) {
    rowArray.push(rowElements[i].innerText)
  }
  return rowArray // gives the array back to be used later
}

// Get Column Elements
function getColumnValues(columnElements) {
  let columnArray = []
  for (let i = 0; i < columnElements.length; i++) {
    columnArray.push(columnElements[i].textContent)
  }
  return columnArray // gives the array back to be used later
}

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

/////////////////////////////////////////////////////////////////////

function getRowValues(rowElements) {
  let rowsArray = []
  let rowOne = []
  let rowTwo = []
  let rowThree = []
  for (let i = 0; i < rowElements.length; i++) {
    if (rowElements[i].className === "a x" || rowElements[i].className === "a y" || rowElements[i].className === "a z") {
      rowOne.push(rowElements[i].innerText)

    } else if (rowElements[i].className === "b x" || rowElements[i].className === "b y" || rowElements[i].className === "b z") {
      rowTwo.push(rowElements[i].innerText)

    } else if (rowElements[i].className === "c x" || rowElements[i].className === "c y" || rowElements[i].className === "c z") {
      rowThree.push(rowElements[i].innerText)
      
    }
    //rowArray.push(rowElements[i].innerText)
  }
  rowsArray.push(rowOne)
  rowsArray.push(rowTwo)
  rowsArray.push(rowThree)
  return rowsArray // gives the array back to be used later
}

// Get Column Elements
function getColumnValues(columnElements) {
  let columnsArray = []
  let columnOne = []
  let columnTwo = []
  let columnThree = []
  for (let i = 0; i < columnElements.length; i++) {
    if (columnElements[i].className === "a x" || columnElements[i].className === "b x" || columnElements[i].className === "c x") {
      columnOne.push(columnElements[i].innerText)

    } else if (columnElements[i].className === "a y" || columnElements[i].className === "b y" || columnElements[i].className === "c y") {
      columnTwo.push(columnElements[i].innerText)

    } else if (columnElements[i].className === "a z" || columnElements[i].className === "b z" || columnElements[i].className === "c z") {
      columnThree.push(columnElements[i].innerText)

    }
    //rowArray.push(rowElements[i].innerText)
  }
  columnsArray.push(columnOne)
  columnsArray.push(columnTwo)
  columnsArray.push(columnThree)
  return columnsArray // gives the array back to be used later
}