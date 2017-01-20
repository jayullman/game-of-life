import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../style/App.css';

import Board from './Board';
import GenerationCounter from './GenerationCounter';
import ControlPanel from './ControlPanel';
import createInitialBoard from '../helpers/createInitialBoard';
import advanceBoard from '../helpers/advanceBoard';
import createBlankBoard from '../helpers/createBlankBoard';
import Header from './Header';
import Footer from './Footer';
import Instructions from './Instructions';

import * as SPEEDS from '../helpers/speed_constants';
import * as DENSITY from '../helpers/density_constants';

// TODO: Add ability to click and drag cells
// create mousedown state

class App extends Component {
  constructor() {
    super();

    this.state = {
      generationCount: 0,
      rows: 30,
      cols: 30,
      // [0,1] = 0: no life density, 1: max density
      density: DENSITY.MEDIUM_DENSITY,
      cells: [],
      cancelIntervalCode: null,
      gameRunning: true,
      boardClear: false,
      gameSpeed: SPEEDS.MEDIUM,
      mouseIsDown: false,
      showInstructions: false
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
    console.log(event.target.value);
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

  handleClearClick = () => {
    this.setState({
      cells: createBlankBoard(this.state.rows, this.state.cols),
      gameRunning: false,
      boardClear: true,
      generationCount: 0
    });
    clearInterval(this.state.cancelIntervalCode);
  }

  handleSpeedChange = (event) => {
    if (this.state.gameRunning) {
      this.setState({
        gameSpeed: event.target.value
      }, () => {
        // callback function to be executed once state is set
        clearInterval(this.state.cancelIntervalCode);
        this.startBoard();
      });
    } else {
      this.setState({
        gameSpeed: event.target.value
      });
    }
  }



  handleGridSizeChange = (event) => {
    const gridSize = event.target.value;
    if (gridSize > 0 && gridSize <= 100) {
      this.setState({
        rows: gridSize,
        cols: gridSize
      });
    }
  }

  handleRestartClick = () => {
    this.handleClearClick();
    setTimeout(() => {
      this.handlePlayPauseClick()}
      ,800)
  }

  // this function will allow a user make a dead cell alive with mouse click
  handleSelectCell = (event) => {
    console.log(event.target.id);
    // get cell position in array
    const position = event.target.id;
    const cellRow = Math.floor(position / this.state.cols);
    const cellCol = position % this.state.cols;

    //create new board to mutate
    let newBoard = [...this.state.cells];
    newBoard[cellRow][cellCol] = true;

   this.setState({
     cells: newBoard,
     boardClear: false
   });
  }

  handleMouseOver = (event) => {
    if (this.state.mouseIsDown) {
      // get cell position in array
      const position = event.target.id;
      const cellRow = Math.floor(position / this.state.cols);
      const cellCol = position % this.state.cols;

      //create new board to mutate
      let newBoard = [...this.state.cells];
      newBoard[cellRow][cellCol] = true;

     this.setState({
       cells: newBoard,
       boardClear: false
     });
    }

  }

  handleMouseDown = () => {
    this.setState({
      mouseIsDown: true
    });
  }

  handleMouseUp = () => {
    this.setState({
      mouseIsDown: false
    });
  }

  handleShowInstructions = () => {
    this.state.showInstructions
    ? this.setState({showInstructions: false})
    : this.setState({showInstructions: true})
  }

  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="instructions-transition"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {this.state.showInstructions
            ? <Instructions handleShowInstructions={this.handleShowInstructions}/>
            : null}
          </ReactCSSTransitionGroup>
        <Header />

        <button
          onClick={this.handleShowInstructions}
          className="btn show-instuctions-button"
          >Show Instructions</button>
        <ControlPanel
          gameRunning={this.state.gameRunning}
          selectedDensity={this.state.density}
          onDensityChange={this.handleDensityChange}
          onPlayPauseClick={this.handlePlayPauseClick}
          onClearClick={this.handleClearClick}
          handleSpeedChange={this.handleSpeedChange}
          selectedSpeed={this.state.gameSpeed}
          onRestartClick={this.handleRestartClick}
          gridSize={this.state.cols}
          handleGridSizeChange={this.handleGridSizeChange}
        />
        <Board
          rows={this.state.rows}
          cols={this.state.cols}
          cells={this.state.cells}
          density={this.state.density}
          onSelectCell={this.handleSelectCell}
          handleMouseOver={this.handleMouseOver}
          handleMouseUp={this.handleMouseUp}
          handleMouseDown={this.handleMouseDown}
        />
        <GenerationCounter generationCount={this.state.generationCount} />
        <Footer />
      </div>
    );
  }
}

export default App;
