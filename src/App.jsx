import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(1500); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="App">
      <div className="timer">
        <h1>{formatTime(seconds)}</h1>
        <div className="buttons">
          <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;