// this component will house all of the controls for the game

import React from 'react';
import * as SPEEDS from '../helpers/speed_constants';
import * as DENSITY from '../helpers/density_constants';


export default function ControlPanel(props) {
  return (
    <div className="control-panel">
      <button
        onClick={props.onPlayPauseClick}
      >{props.gameRunning ? 'Pause' : 'Play'}
      </button>
      <button onClick={props.onClearClick}>
        Clear
      </button>
      <label htmlFor="density-select">Life Density
        <select
          value={props.selectedDensity}
          onChange={props.onDensityChange}>
            <option value={DENSITY.LOW_DENSITY}>Low</option>
            <option value={DENSITY.MEDIUM_DENSITY}>Medium</option>
            <option value={DENSITY.HIGH_DENSITY}>High</option>
        </select>
      </label>
      <label htmlFor="speed-select">Speed
        <select
          value={props.selectedSpeed}
          onChange={props.handleSpeedChange}>
            <option value={SPEEDS.SLOW}>Slow</option>
            <option value={SPEEDS.MEDIUM}>Medium</option>
            <option value={SPEEDS.FAST}>Fast</option>
            <option value={SPEEDS.LUDICROUS}>Ludicrous</option>
            <option value={SPEEDS.PLAID}>Plaid</option>
        </select>
    </label>
    <button onClick={props.onRestartClick}>
      Restart
    </button>
    Grid Size: <input
      type="range"
      min="10"
      max="70"
      value={props.gridSize}
      onChange={props.handleGridSizeChange}
    />
    {props.gridSize}
    </div>
  );
}
