// this function will advance the board by one generation

function countNeighbors(cells, row, col) {
  const LAST_COL_INDEX = cells[row].length - 1;
  const LAST_ROW_INDEX = cells.length - 1
  let neighborCount = 0;

// check 8 adjacent spots allows for board wrapping
// wraps around board if check is out of bounds

for (let i = -1; i < 2; i++) {
  var currentRow = row + i;

  if (currentRow < 0) {
    currentRow = LAST_ROW_INDEX;
  } else if (currentRow > LAST_ROW_INDEX) {
    currentRow = 0;
  }

  for (let j = -1; j < 2; j++) {
    var currentCol = col + j;

    if (currentCol < 0) {
      currentCol = LAST_COL_INDEX;
    } else if (currentCol > LAST_COL_INDEX) {
      currentCol = 0;
    }

    //console.log(`cell at [${currentRow}][${currentCol}] is ${cells[currentRow][currentCol]}`);
    if (cells[currentRow][currentCol] === true) {
      // cell should not count itself
      if (!(currentRow === row && currentCol === col)) {
        neighborCount++;
      }
    }

  }
}
  return neighborCount;
}

export default function advanceBoard(cells) {

  let newBoardState = [];

  for (let i = 0; i < cells.length; i++){
    let row = [];
    for (let j = 0; j < cells[i].length; j++) {
      let currentCell = cells[i][j];
      let cellNeighbors = countNeighbors(cells, i, j);
      // tests whether the current cell is alive or dead
      switch (currentCell) {
        // if cell is alive
        case true:
          if (cellNeighbors < 2 || cellNeighbors > 3) {
            row[j] = false;
          } else {
            row[j] = true;
          }
          break;

        // if cell is dead
        case false:
          if (cellNeighbors === 3) {
            row[j] = true;
          } else {
            row[j] = false;
          }
          break;
      }
    }
    newBoardState.push(row);
  }
  return newBoardState;
}
