// this component will house all of the controls for the game

import React from 'react';

export default function ControlPanel(props) {
  return (
    <div className="control-panel">
      <button
        onClick={props.onPlayPauseClick}
      >{props.gameRunning ? 'Pause' : 'Play'}
      </button>
      <button
        onClick={props.onClearClick}
        >Clear</button>
      <label>Density:
        <input
          onChange={props.onDensityChange}
          value={props.density}
        />
      </label>
    </div>
  );
}
