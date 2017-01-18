import createBlankBoard from './createBlankBoard';


// this module will create a new board based on user defined height and width
// function will return an array with a randomized board


// helper function to check if number in part from stackoverflow:
// http://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery
function isValidDensity(n) {
  const isNumber = !isNaN(parseFloat(n) && isFinite(n));

  return isNumber && n >= 0 && n <= 1;

}

function isAlive(density) {
  return Math.random() < density ? true : false;
}

export default function(rows, cols, density = .2) {
  // width: number of cells across
  // height: number of rows

  // checks to see if density is a valid number
  if (!isValidDensity(density)) {
    alert('Density must be between 0 and 1');
    // if not, defaults to .3
    density = .2;
  }


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
