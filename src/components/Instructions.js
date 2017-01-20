// this component is a dialogue box explaining the game
// and how to use the app
import React from 'react';


export default function(props) {
  return (
    <div className="instructions-mask">
    <div className="instructions">
        <h4>Welcome to Conway's Game of Life!</h4>
        <p>
          The game is simple: The board represents cells, either alive or dead.
          There are a few simple rules governing their lives:
        </p>

        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies,
            as if caused by underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives
            on to the next generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies,
            as if by overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes
            a live cell, as if by reproduction.
          </li>
        </ol>
        Check out the <a
          href="https://en.wikipedia.org/wiki/Conway's_Game_of_Life"
          target="_blank">Wikipedia article</a> for more info

          <h4>App instructions</h4>
        <ul>
          <li>You can click and drag on the board to create more living cells.
            Clear the board and draw your own starting board! (Desktop only)</li>
          <li>Life Density: How full of living cells the board is when it restarts</li>
          <li>Speed: How fast the cells reproduce and die</li>
          <li>Grid Size: Select a size between 10x10 and 70x70</li>
        </ul>

        <button
          className="btn"
          onClick={props.handleShowInstructions}>Got it!</button>
    </div>
  </div>
  );
}
