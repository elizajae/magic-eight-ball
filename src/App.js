import React from 'react';
import './App.css';
import EightBall from './EightBall';
import answers from './answer';

function App() {
  return (
    <div className="App">
      <EightBall data={answers}/>
    </div>
  );
}

export default App;
