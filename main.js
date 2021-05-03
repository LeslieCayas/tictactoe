
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

for (i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function(event) {
    alternatePlayer(event)
    console.log(event)
  })
  }


function placeX(event) {
  event.target.innerText = 'X'
}

function placeO(event) {
  event.target.innerText = 'O'
}

let playerOneStatus = true
function alternatePlayer(event) {
  console.log(playerOneStatus)
  if (playerOneStatus) {
    placeX(event) //puts an X
    playerOneStatus = false
  } else if (playerOneStatus === false) {
    placeO(event) //puts an O
    playerOneStatus = true
  }
}
/* Alternate between players */
// the if statement for a taken position works


/* Three in a ROW */
const rowOne = Array.from(document.querySelectorAll('.a'))
const rowTwo = Array.from(document.querySelectorAll('.b'))
const rowThree = Array.from(document.querySelectorAll('.c'))
let rows = [rowOne, rowTwo, rowThree]
console.log(rowOne)
console.log(rowTwo)
console.log(rows[0][1])
//turns all cells green after clicking three in the second row regardless of character

for (i = 0; i < rowTwo.length; i++) {
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
}

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
/* for each row and for each item in each row, add an event listener.
when the element is clicked,*/

function getRowValues(rowElements) {
  let rowArray = []
  for ( let i = 0; i < rowElements.length; i++) {
    rowArray.push(rowElements[i].innerText)
  }
  console.log(rowArray)
}
let row1Values = getRowValues(document.querySelectorAll('.a'))
let row2Values = getRowValues(document.querySelectorAll('.b'))
let row3Values = getRowValues(document.querySelectorAll('.c'))

function getColumnValues(columnElements) {
  let columnArray = []
  for ( let i = 0; i < columnElements.length; i++ ) {
    columnArray.push(columnElements[i].textContent)
  }
  console.log(columnArray)
}
let column1Values = getColumnValues(document.querySelectorAll('.x'))
let column2Values = getColumnValues(document.querySelectorAll('.y'))
let column3Values = getColumnValues(document.querySelectorAll('.z'))

