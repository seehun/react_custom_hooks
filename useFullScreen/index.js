import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useFullScreen from './useFullScreen';

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'we are full' : 'we are small');
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);

  return (
    <div ref={element}>
      <img src='https://i.ibb.co/R6RwNxx/grape.jpg' width='250' />
      <button onClick={triggerFull}>make fullscreen</button>
      <button onClick={exitFull}>exit fullscreen</button>
    </div>
  );
};

export default App;
