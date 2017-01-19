import createBlankBoard from './createBlankBoard';


// this module will create a new board based on user defined height and width
// function will return an array with a randomized board



function isAlive(density) {
  return Math.random() < density ? true : false;
}

export default function(rows, cols, density = .2) {
  // width: number of cells across
  // height: number of rows
  


  let newBoard = createBlankBoard(rows, cols);
  for (let i = 0; i < rows; i++){
    let row = [];
    for (let j = 0; j < cols; j++) {
      row[j] = isAlive(density);
    }
    newBoard[i] = row;
  }

  return newBoard;

}
