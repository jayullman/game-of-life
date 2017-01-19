// Header component for the app

import React from 'react';

function Header() {
  return (
    <div className="App-header">
      <h1><span className="fcc-title">Conway's Game of Life</span></h1>

        <h5 className="github">View this project on <a target="_blank"
          href="https://github.com/libeja/game-of-life">GitHub</a> <a
            target="_blank"
            href="https://github.com/libeja/game-of-life"><i
              className="fa fa-github" aria-hidden="true"></i></a></h5>
    </div>
  );
}

export default Header;
