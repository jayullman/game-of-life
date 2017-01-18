// this module will create a new board based on user defined height and width
// function will return an array with a randomized board

function isAlive(density) {
  return Math.random() < density ? true : false;
}

export default function(width, height, density) {
  // width: number of cells across
  // height: number of rows

  let newBoard = [];

  for (let i = 0; i < height; i++){
    let row = [];
    for (let j = 0; j < width; j++) {
      row[j] = isAlive(density);
    }
    newBoard.push(row);
  }

  return newBoard;

}
