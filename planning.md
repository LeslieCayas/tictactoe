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

<!-- PLAYERS -->
assign player 1 = 1
when clicked, change innertext to 1
if text has 1 or 2, cannot be clicked again

assign player 2 = 2
when clicked, change innertext to 1
if text has 1 or 2, cannot be clicked again

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
-diagonal type 2 (z[0]a[2], b[1]y[1], x[2]c[0])
create a variable for each diagonal
for each box in the diagonal:
--assume that there are 3 X/O in either of the diagonals
--if there is one odd box, state that there isn't 3 X/O in a diagonal
--alternatively, if there are 3 in diagonal 1 or diagonal 2, then the player who placed 3 in a diagonal, wins
