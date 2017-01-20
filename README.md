# Conway's Game of Life
_____
## About
This is a project created for freeCodeCamp's React/Data visualization certificate.

More information regarding the game can be found at the [Game of Life Wikipedia page](https://en.wikipedia.org/wiki/Conway's_Game_of_Life)

##### Rules of the game:

##### The following user stories needed to be fulfilled:
1. User Story: When I first arrive at the game, it will randomly generate a board and start playing.
2. User Story: I can start and stop the board.
3. User Story: I can set up the board.
4. User Story: I can clear the board.
5. User Story: When I press start, the game will play out.
6. User Story: Each time the board changes, I can see how many generations have gone by.

## Implementations/Features

### Board
The board is represented in state as the cells property. It is a 2-dimensional board of boolean values, where false represents a dead cell, and true represents a living cell. When the board is rendered with the Board component, conditional rendering is used (via a ternary operator) to determine the style of the cell (living or dead), and whether the cell is clickable/draggable, through a passed in callback function from the App parent component. The board has been made to be responsive. The size of the cells shrink as the size of the screen/browser window decreases.

### Game Speed
Game speed was determined by stetting the value of the second argument to setTimeout, which was kept as a list of constants in a module.

### Life Density
When the board is populated, a random number is produced that is tested against a density number ranging from 0 to 1 (non-inclusive). These values are set as constants, and the user can select via a dropdown how populated the board is upon its repopulation. The higher the number, the more life present on the board.

### Board Size
The board size is able to be customized through the use of a slider. The value of the slider sets the state of the rows property of the App state object. Whenever a new board is created, this value is consulted to create a board size of sliderValue x sliderValue.

### Clickable/Drawable Cells
The user is able to click on individual cells or click and drag over the board to turn dead cells into living cells. This was accomplished by keeping a global state property of whether the mouse was down, and then having each cell respond to the mouseOver event. When these two conditions were true, the cells property of the state object, which is a 2-dimensional array, was changed from false to true, at the appropriate index. This was then rendered as a living cell to the user.

## New Things I've learned
* Learned that setState takes a second argument, a callback that is called once the state is updated. This helped solve a problem of not having the use of the the updated state within the same function.
* Learned how to create click-and-drag functionality by combining the mouseOver event with a global mouseDown flag (set on the state object)
* Reinforced the idea of not mutating the state and made use of the ES6 spread operator [...] in order to copy an array for mutation.
* How to use CSS animations with React by using the ReactCSSTransitionGroup API
