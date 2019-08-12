import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ strikes ,setStrikes ] = useState(0)
  const [ balls , setBalls ] = useState(0)

  const strikeHandler = () => {
    
    if (strikes === 2) {
      resetHandler()
    } else {
      plusOneStrike()
    } 
    console.log('strike')
  }

  const ballHandler = () => {
    if (balls === 3) {
      resetHandler()
    }else {
      setBalls(balls + 1)
    }
    console.log('ball')
  }

  const foulHandler = () => {
    if (strikes < 2) {
      plusOneStrike()
    }

    console.log('foul')
    
  }

  const hitHandler = () => {
    resetHandler()
    
  }

  const resetHandler = () => {
    setStrikes(0)
    setBalls(0)
  }

  const plusOneStrike = () => {
    setStrikes(strikes + 1)
  }

  return (
    <div className="App">
      <div className='display'>
        <h2 className='label'>Strikes</h2>
        <h2>{strikes}</h2>
        <h2 className='label'>Balls</h2>
        <h2>{balls}</h2>
      </div>
      <div className='dashboard'>
        <button onClick={strikeHandler}>Strike</button>
        <button onClick={ballHandler}>Ball</button>
        <button onClick={foulHandler}>Foul</button>
        <button onClick={hitHandler}>Hit</button>
      </div>
    </div>
  );
}

export default App;
