# My tic-tac-toe game

This is my tic-tac-toe game using "vanilla Javascript", HTML and CSS.
To develop this game, a grid was made using HTML and CSS where the rows and columns were assigned by giving classes.

## How To Play:
1. Access the game <a href="https://lesliecayas.github.io/tictactoe/">here.</a>
2. Play the game just like any other tic-tac-toe game.
3. Reset the game by clicking the "Play Again" button.

## Approach:
1. Set up the gameboard as a grid with rows and columns assigned classes. 
2. Stored data from each row and column as an array.
3. Initially wrote out functions to check row and column.
4. Developed a function that would store the diagonals as an array based on `.className`
    - After `diagonalOneArray` and `diagonalTwoArray` were made, these was grouped and defined as the grid's diagonals.
5. Wrote out function that would check if there are 3 in a row in each diagonal.
6. Further condensed the three in a row functions as they were found to be repetitive.
7. Declare state of `winner`
7. After condensing the functions, each function was given a separate name and placed in an event listener for the game board to allow overall readability.

## Problems:
- The cell `div`s initially had text inside them while the functions were created.
    - This made it difficult for the threeInARow function as it detects blank cells as part of being three in a row.
    - This was ammended by including blank statements `''` in the conditional.
- Alerting a draw.
    - If a player won in 9 moves, it would declare a winner but alert a draw
    - Ammended by creating a `winner` status where the code assumes there is no winner until `threeTokensCheck` is true
        - if `threeTokensCheck` is false, `winner` remains false.
        - Therefore, if `winner` is false AND 9 moves have occurred, it is considered a draw.

## Future Improvements:
- Highlight where the player has won.
- Adjust for a 4x4 grid:
    - `getDiagonalsValues` function would have to be adjusted along with HTML to avoid repetition of .className in the conditions.
- Add more user interactivity e.g. animation.