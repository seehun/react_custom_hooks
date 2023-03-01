import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useScroll from './useScroll';

const App = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: '1000vh' }}>
      <h2 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
        {y}
      </h2>
    </div>
  );
};

export default App;
