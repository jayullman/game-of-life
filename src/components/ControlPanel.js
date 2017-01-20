// this component will house all of the controls for the game

import React from 'react';
import * as SPEEDS from '../helpers/speed_constants';
import * as DENSITY from '../helpers/density_constants';


export default function ControlPanel(props) {
  return (
    <div className="control-panel">
      <fieldset className="controls">
        <legend className="legend">Game Controls</legend>


      <div className="control-group">
        <button
          className="btn"
          onClick={props.onPlayPauseClick}
        >{props.gameRunning
          ? <i className="fa fa-pause" aria-hidden="true"></i>
          : <i className="fa fa-play" aria-hidden="true"></i>}
        </button>
        <button
          className="btn"
          onClick={props.onClearClick}>
          Clear
        </button>
    </div>

    <div className="control-group">
      <label htmlFor="speed-select">Speed:
        <select
          className="select-control"
          value={props.selectedSpeed}
          onChange={props.handleSpeedChange}>
            <option value={SPEEDS.SLOW}>Slow</option>
            <option value={SPEEDS.MEDIUM}>Medium</option>
            <option value={SPEEDS.FAST}>Fast</option>
            <option value={SPEEDS.LUDICROUS}>Ludicrous</option>
            <option value={SPEEDS.PLAID}>Plaid</option>
        </select>
      </label>
    </div>
    </fieldset>
    <fieldset className="controls">

      <legend className="legend">Board Setup</legend>
      <div className="control-group control-group-grid">
        Grid Size: 
        <input
          className="slider"
          type="range"
          min="10"
          max="70"
          value={props.gridSize}
          onChange={props.handleGridSizeChange}
        />
        <span className="grid-size">{props.gridSize}</span>
      </div>
      <div className="control-group">
        <label htmlFor="density-select">Life Density:
          <select
            className="select-control"
            value={props.selectedDensity}
            onChange={props.onDensityChange}>
              <option value={DENSITY.LOW_DENSITY}>Low</option>
              <option value={DENSITY.MEDIUM_DENSITY}>Medium</option>
              <option value={DENSITY.HIGH_DENSITY}>High</option>
          </select>
        </label>

      <button
        className="btn"
        onClick={props.onRestartClick}>
        Restart
      </button>
    </div>


  </fieldset>
    </div>
  );
}
