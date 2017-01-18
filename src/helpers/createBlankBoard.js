export default function(rows, cols) {
  // width: number of cells across
  // height: number of rows

  let blankBoard = [];

  for (let i = 0; i < rows; i++){
    let row = [];
    for (let j = 0; j < cols; j++) {
      row[j] = false;
    }
    blankBoard.push(row);
  }

  return blankBoard;

}
