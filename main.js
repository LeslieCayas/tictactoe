
// TEST ZONE: area selected is cell 1
/*let box = document.querySelector('.a.x')
box.addEventListener('click', function () {
  if (box.innerHTML === 'O' || box.innerHTML === 'X') {
    alert('This spot is taken!')
  } else {
    console.log('clicked')
  }
})*/

/* Creating player tokens */


let boxes = document.querySelectorAll('div')
let playerOneStatus = true

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function (event) {
    alternatePlayer(event)
    let row1Values = getRowValues(document.querySelectorAll('.a'))
    let row2Values = getRowValues(document.querySelectorAll('.b'))
    let row3Values = getRowValues(document.querySelectorAll('.c'))
    let column1Values = getColumnValues(document.querySelectorAll('.x'))
    let column2Values = getColumnValues(document.querySelectorAll('.y'))
    let column3Values = getColumnValues(document.querySelectorAll('.z'))

  })
}
function placeX(event) {
  event.target.innerText = 'X'
}

function placeO(event) {
  event.target.innerText = 'O'
}

function alternatePlayer(event) {
  console.log(playerOneStatus)
  if (playerOneStatus) {
    if (event.target.innerText == 'X' || event.target.innerText == 'O') {
      alert('something here')
    } else {
      placeX(event) //puts an X
      playerOneStatus = false
    }
  } else if (playerOneStatus === false) {
    if (event.target.innerText == 'X' || event.target.innerText == 'O') {
      alert('something here')
    } else {
      placeO(event) //puts an O
      playerOneStatus = true
    }
  }
}
/* Alternate between players */
// the if statement for a taken position works


/* Three in a ROW */
const rowOne = document.querySelectorAll('.a')
const rowTwo = document.querySelectorAll('.b')
const rowThree = document.querySelectorAll('.c')
let rows = [rowOne, rowTwo, rowThree]
console.log(rowOne)
console.log(rowTwo)
//console.log(rows[0][1].textContent)

/* for each row and for each item in each row, add an event listener.
when the element is clicked,*/

// Get Row Elements
function getRowValues(rowElements) {
  let rowArray = []
  for (let i = 0; i < rowElements.length; i++) {
    rowArray.push(rowElements[i].innerText)
  }
  return rowArray // gives the array back to be used later
}
let row1Values = getRowValues(document.querySelectorAll('.a'))
let row2Values = getRowValues(document.querySelectorAll('.b'))
let row3Values = getRowValues(document.querySelectorAll('.c'))


// Get Column Elements
function getColumnValues(columnElements) {
  let columnArray = []
  for (let i = 0; i < columnElements.length; i++) {
    columnArray.push(columnElements[i].textContent)
  }
  return columnArray // gives the array back to be used later
}
let column1Values = getColumnValues(document.querySelectorAll('.x'))
let column2Values = getColumnValues(document.querySelectorAll('.y'))
let column3Values = getColumnValues(document.querySelectorAll('.z'))

// Get Diagonal Elements

console.log(row3Values)
console.log(row2Values)
console.log(row1Values)


/*
analyse the row
assume the row has the same content in each cell
check through each cell
if the cell has diff content state that the row is uneven
check through each cell again
if the rows are all the same declare that the row is found
*/
function rowCheck(row) {
  for (let i = 0; i < row.length; i++) {
    let threeInARow = true
    for (let i = 0; i < row.length; i++) {
      if (row[i].innerText !== 'X' || row[i].innerText !== 'O') {
        threeInARow = false
      }
    }
    for (let i = 0; i < row.length; i++) {
      if (threeInARow) {
        row[i].style.backgroundColor = 'green'
      }
    }
  }
}
rowCheck(row1Values)

//turns all cells green after clicking three in the second row regardless of character

/*for (i = 0; i < rowTwo.length; i++) {
  rowTwo[i].addEventListener('click', function (event) {
    //event.target.innerText = 'X'
    let rowCheck = true

    for (let i = 0; i < rowTwo.length; i++) {
      if (rowTwo[i].innerText !== 'X' && rowTwo[i].innerText !== 'O') {
        rowCheck = false
      }
    }
    for (let i = 0; i < rowTwo.length; i++) {
      if (rowCheck) {
        rowTwo[i].style.backgroundColor = 'green'
      }
    }
  })
}*/

// adds click listener to all boxes
// can probably be done in another way
/*for (i = 0; i < rows.length; i++) {
  for (j=0; j < rows[i].length; j++) {
    rows[i][j].addEventListener('click', function(event) {
      console.log('clicked')
      event.target.innerText = 'X'
      let rowCheck = true

    })
  }
}*/

