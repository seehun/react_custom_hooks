import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useClick from './useClick';

const App = () => {
  const sayhello = () => console.log('hello');
  const title = useClick(sayhello);
  return (
    <div>
      <h2 ref={title}>hi</h2>
    </div>
  );
};

export default App;
