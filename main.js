
// TEST ZONE: area selected is cell 1
/*let box = document.querySelector(".a.x")
box.addEventListener("click", function () {
  if (box.innerHTML === "O" || box.innerHTML === "X") {
    alert("This spot is taken!")
  } else {
    console.log("clicked")
  }
})*/

/* Creating player tokens */


let boxes = document.querySelectorAll("div")
let playerOneStatus = true
let row1Values, row2Values, row3Values, column1Values, column2Values, column3Values
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
    diagonal1Values = getDiagonal(document.querySelectorAll(".m"))
    diagonal2Values = getDiagonal(document.querySelectorAll(".n"))
    threeInARow(row1Values)
    threeInARow(row2Values)
    threeInARow(row3Values)
    threeInAColumn(column1Values)
    threeInAColumn(column2Values)
    threeInAColumn(column3Values)
    threeInADiagonal(diagonal1Values)
    threeInADiagonal(diagonal2Values)
  }
  )
}

function threeInADiagonal(array) {
  let diagonalCheck = true
  for ( let i = 0; i < array.length; i++) {
    if (array[i] != array[0]) {
      diagonalCheck = false
    }
  } for (let i = 0; i < array.length; i++) {
    if (diagonalCheck) {
      console.log("three in a diagonal")
    }
  }

}
function threeInARow(array) {
  let rowCheck = true
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      rowCheck = false
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (rowCheck) {
      console.log("There is 3 in a row")
    }
  }
}
function threeInAColumn(array) {
  let columnCheck = true
  for (let i = 0; i < array.length; i++) {
    if (array[0] !== array[i]) {
      columnCheck = false
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (columnCheck) {
      console.log("There is 3 in a column")
    }
  }
}

/* function hi (thingToInspect) {
  for (let i = 0; i < thingtoInspect.length; i++)
  */
function placeX(event) {
  event.target.innerText = "X"
  document.querySelector("h2").innerText = "Player Two's Turn"
}

function placeO(event) {
  event.target.innerText = "O"
  document.querySelector("h2").innerText = "Player One's Turn"

}
// Able to alternate player and prevent player from clicking a taken spot
function alternatePlayer(event) {
  console.log(playerOneStatus)
  if (playerOneStatus) {
    if (event.target.innerText == "X" || event.target.innerText == "O") {
      alert("something here")
    } else {
      placeX(event) //puts an X
      playerOneStatus = false
    }
  } else if (playerOneStatus === false) {
    if (event.target.innerText == "X" || event.target.innerText == "O") {
      alert("something here")
    } else {
      placeO(event) //puts an O
      playerOneStatus = true
    }
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
//let row1Values = getRowValues(document.querySelectorAll(".a"))
//let row2Values = getRowValues(document.querySelectorAll(".b"))
//let row3Values = getRowValues(document.querySelectorAll(".c"))


// Get Column Elements
function getColumnValues(columnElements) {
  let columnArray = []
  for (let i = 0; i < columnElements.length; i++) {
    columnArray.push(columnElements[i].textContent)
  }
  return columnArray // gives the array back to be used later
}

// Get Diagonal Elements
function getDiagonal(diagonalElements) {
  let diagonalArray = []
  for (let i = 0; i < diagonalElements.length; i++) {
    diagonalArray.push(diagonalElements[i].innerText)
  }
  return diagonalArray
}


//let column1Values = getColumnValues(document.querySelectorAll(".x"))
//let column2Values = getColumnValues(document.querySelectorAll(".y"))
//let column3Values = getColumnValues(document.querySelectorAll(".z"))

// Get Diagonal Elements

/*
get the following innerText
.a.z .b.y .c.z
.a.z .b.y .c.x

push into an array where
diagonal 1 = .a.x .b.y .c.z
diagonal 2 = .c.x .b.y .a.z
*/

/*function getDiagonalValues() {
  let diagonalArray = []
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].className === "a x" || "b y" || "c z") {
      diagonalArray.push(boxes[i].textContent)
    }
    return diagonalArray
  }
  //if has class .a.x or .b.y or .c.z push into diagonalOneArray
  //if has class .c.x or .b.y or .a.z push into diagonalTwoArray
}*/



/*
analyse the row
assume the row has the same content in each cell
check through each cell
if the cell has diff content state that the row is uneven
check through each cell again
if the rows are all the same declare that the row is found
*//*
function rowCheck(row) {
  for (let i = 0; i < row.length; i++) {
    let threeInARow = true
    for (let i = 0; i < row.length; i++) {
      if (row[i].innerText !== "X" || row[i].innerText !== "O") {
        threeInARow = false
      }
    }
    for (let i = 0; i < row.length; i++) {
      if (threeInARow) {
        row[i].style.backgroundColor = "green"
      }
    }
  }
}
rowCheck(row1Values)*/

//turns all cells green after clicking three in the second row regardless of character
/*
for (i = 0; i < row1Values.length; i++) {
  row1Values[i].addEventListener("click", function (event) {
    //event.target.innerText = "X"
    let rowCheck = true

    for (let i = 0; i < row1Values.length; i++) {
      if (row1Values[i].innerText !== "X" && row1Values[i].innerText !== "O") {
        rowCheck = false
      }
    }
    for (let i = 0; i < row1Values.length; i++) {
      if (rowCheck) {
        row1Values[i].style.backgroundColor = "green"
      }
    }
  })
}

// adds click listener to all boxes
// can probably be done in another way
/*for (i = 0; i < rows.length; i++) {
  for (j=0; j < rows[i].length; j++) {
    rows[i][j].addEventListener("click", function(event) {
      console.log("clicked")
      event.target.innerText = "X"
      let rowCheck = true

    })
  }
}*/

