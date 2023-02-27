import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import usePreventLeave from './usePreventLeave';

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>protect</button>
      <button onClick={disablePrevent}>unprotect</button>
    </div>
  );
};

export default App;
