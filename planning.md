board as an array
player 1 = 

check if user won
3 in a row somewhere?
- have they got 3 in a row in row 1?
- have they got 3 in a row in row 2?
- have they got 3 in a row in row 3?
- have they got 3 in a row on some diagonal etc

function getFirstRowElements() {
  document.querySelectorAll('row1')
}
function getSecondRowElements() {

}
function getThirdRowElements() {

}
do the same for columns/diagonals
----------------------------------------------
make a game board where rows/columns are stored as arrays
a = [0, 1, 2]
b = [0, 1, 2]
c = [0, 1, 2]

x = [0, 1, 2]
y = [0, 1, 2]
z = [0, 1, 2]
abc = rows, xyz = columns 
    A   B   C
    _   _   _
X | _ | _ | _ |
Y | _ | _ | _ |
Z | _ | _ | _ |

change class with cell # and store winning combinations

<!-- PLAYERS -->
assign player 1 = X
assign player 2 = O
set player1 status as true
if it is player 1's turn, place an X in the clicked position
--when clicked, change innertext to X and change player1 status to false
--if text has 1 or 2, cannot be clicked again
if it is not player 1's turn, it is player 2's turn so place an O in the clicked position
--when clicked, change innertext to O and change player1 status to true
--if text has 1 or 2, cannot be clicked again

<!-- GAME FUNCTIONALITY -->
functions to check if there are 3 in one of the rows, columns, diagonals

FOR ROWS/COLUMNS
assume that there are 3 X/O in a row
- [X][X][X]
for each box in the row/
--keep going through each box in each row (abc) until there is one odd box e.g. XXO
--if there is one odd box, state that there isn't 3 X in a row
--alternatively, if there are 3 in a row, then the player who placed 3 in a row, wins
The above is the same but looping through the columns (xyz)

FOR DIAGONALS
would need to have the same text in either:
-diagonal type 1(a[0]z[0], b[1]y[1], c[2]z[2]) 
----AKA (.a.z and .b.y and  .c.z)
-diagonal type 2 (z[0]a[2], b[1]y[1], x[2]c[0])
----AKA (.a,.z and .b.y and .c.x)

create a variable for each diagonal
for each box in the diagonal:
--assume that there are 3 X/O in either of the diagonals
--if there is one odd box, state that there isn't 3 X/O in a diagonal
--alternatively, if there are 3 in diagonal 1 or diagonal 2, then the player who placed 3 in a diagonal, wins

/// getting row values
grab the textContent of a selected row

// for each item in the selected row
add an event listener that will: 
-- assume text content is the same in all cells of the row = xxx or ooo
-- for each item in the selected row
---- if one of the cells are not the same as the first cell
------ state that the row is does not have the same text in each item
-- for each item in the selected row
---- if all the items have the same content
------ turn the background to green
-- alert winner 


//things to think about
 getting diagonals using  has .className

 /*if (div[i].classList.contains('a') && div[i].classList.contains('x')) {
  diagonalArray.push(div[i].innerText)
} else if (div[i].classList.contains('b') && div[i].classList.contains('y')) {
  diagonalArray.push(div[i].innerText)
} else if (div[i].classList.contains('c') && div[i].classList.contains('z')) {
  diagonalArray.push(div[i].innerText)
}*/