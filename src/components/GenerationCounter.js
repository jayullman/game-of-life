// this component will house the current generation count to display
import React from 'react';


export default function(props) {

  return (
    <div className="generation-count-container">
      <span className="generation-counter-label">Generation Count:</span>
      &nbsp;<div className="generation-counter">{props.generationCount}</div>
    </div>
  );

}
