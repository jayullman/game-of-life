import React, { Component } from 'react';

import '../style/App.css';

import Board from './Board';
import GenerationCounter from './GenerationCounter';
import ControlPanel from './ControlPanel';
import createInitialBoard from '../helpers/createInitialBoard';
import advanceBoard from '../helpers/advanceBoard';
import createBlankBoard from '../helpers/createBlankBoard';
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();

    this.state = {
      generationCount: 0,
      rows: 30,
      cols: 30,
      // [0,1] = 0: no life density, 1: max density
      density: .2,
      cells: [],
      cancelIntervalCode: null,
      gameRunning: true,
      boardClear: false,
      gameSpeed: 500
    };
  }

  componentWillMount() {
    this.setState({
      cells: createInitialBoard(this.state.rows,
                                this.state.cols,
                                this.state.density)
    });

    this.startBoard();
  }

  startBoard = () => {
    let clear = setInterval(() => {
      this.setState({
        cells: advanceBoard(this.state.cells),
        generationCount: this.state.generationCount + 1
      });
    }, this.state.gameSpeed);

    this.setState({
      cancelIntervalCode: clear,
      boardClear: false,
      gameRunning: true
    });
  }

  handleDensityChange = (event) => {
    this.setState({
      density: event.target.value
    })
  }

  handlePlayPauseClick = () => {
    if (this.state.boardClear) {
      // createNewBoard
      this.setState({
        gameRunning: true,
        cells: createInitialBoard(this.state.rows,
          this.state.cols,this.state.density)
      });
      // start new board
      this.startBoard();
    // if game state is running, pause
    } else if (this.state.gameRunning) {

      this.setState({
        gameRunning: false
      });

      clearInterval(this.state.cancelIntervalCode);

    } else {
      this.setState({
        gameRunning: true
      });
      this.startBoard();
    }
  }

  // TODO: create clear board handler
  // separate createInitialBoard
  handleClearClick = () => {
    this.setState({
      cells: createBlankBoard(this.state.rows, this.state.cols),
      gameRunning: false,
      boardClear: true
    });
    clearInterval(this.state.cancelIntervalCode);


  }

  render() {
    return (
      <div className="App">
        <Header />
        <GenerationCounter generationCount={this.state.generationCount} />
        <ControlPanel
          gameRunning={this.state.gameRunning}
          density={this.state.density}
          onDensityChange={this.handleDensityChange}
          onPlayPauseClick={this.handlePlayPauseClick}
          onClearClick={this.handleClearClick}
        />
        <Board
          rows={this.state.rows}
          cols={this.state.cols}
          cells={this.state.cells}
          density={this.state.density}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
