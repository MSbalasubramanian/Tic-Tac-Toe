import React from 'react';

//? Components
import Board from './Components/Board';

//* Styles
import './App.css';

function App() {
  return (
    <>
      <h3 className="heading-text">Tic Tac Toe</h3>

      <Board />
    </>
  );
}

export default App;
