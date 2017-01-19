import React from 'react';

// export function repeat() {
//   const clear = setInterval(() => {
//
//   }, 1000);
//
//
//
//   setTimeout(() => {
//     clearInterval(clear);
//   }, 8000);
//
//
// }

export default function Board(props) {
  const oldCells = props.cells;
  let newCellsMapped = [];

  for (var i = 0; i < oldCells.length; i++) {
    let row = [];
    for (var j = 0; j < oldCells[i].length; j++) {
      if (oldCells[i][j] === true) {
        // id is equal to the cells position in array
        row.push(<div
                    key={i.toString() + j.toString()}
                    className="cell alive"
                    id={j + (i * oldCells.length)}>
                  </div>);
      } else {
        row.push(<div
                    onClick={props.onSelectCell}
                    key={i.toString() + j.toString()}
                    id={j + (i * oldCells.length)}
                    className="cell dead">
                  </div>);
      }
    }
    newCellsMapped.push(<div key={'row' + i} className="cell-row">{row}</div>);
  }

  return (
    <div className="board">
      {newCellsMapped}
    </div>
  );


}
