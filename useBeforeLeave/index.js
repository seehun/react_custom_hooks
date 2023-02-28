import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useBeforeLeave from './useBeforeLeave';

const App = () => {
  const func = () => console.log('dont leave');
  useBeforeLeave(func);
  return <div></div>;
};

export default App;
