// this component will house all of the controls for the game

export default function ControlPanel(props) {

  return (
    <div className="control-panel">
      <button>{props.gameRunning ? 'Pause' : 'Play'}</button>
      <button>Clear</button>
    </div>
  );

}
