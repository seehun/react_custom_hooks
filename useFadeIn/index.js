import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useFadeIn from './useFadeIn';

const App = () => {
  const fadeInH2 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 8);

  return (
    <div>
      <h2 {...fadeInH2}>hi</h2>
      <p {...fadeInP}>jwalbekj</p>
    </div>
  );
};

export default App;
