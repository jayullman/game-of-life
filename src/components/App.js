import React, { Component } from 'react';

import '../style/App.css';

import { repeat } from './Board';
import Board from './Board';
import createInitialBoard from '../helpers/createInitialBoard';
import advanceBoard from '../helpers/advanceBoard';

repeat();


class App extends Component {
  constructor() {
    super();

    this.state = {

      rows: 50,
      cols: 50,
      // [0,1] = 0: no life density, 1: max density
      initialDensity: .2,
      cells: [],
      cancelIntervalCode: null,
      gameRunning: true
    };
  }


  componentWillMount() {
    this.setState({
      cells: createInitialBoard(this.state.rows,
                                this.state.cols,
                                this.state.initialDensity)
    });

    let clear = setInterval(() => {
      this.setState({
        cells: advanceBoard(this.state.cells)
      });
    }, 100);

    this.setState({cancelIntervalCode: clear});

    setTimeout(() => {
      clearInterval(this.state.cancelIntervalCode);
    }, 10000);
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Conway's Game of Life</h2>
        </div>
        <Board
          rows={this.state.rows}
          cols ={this.state.cols}
          cells={this.state.cells}
          density={this.state.initialDensity}
        />
      </div>
    );
  }
}

export default App;
