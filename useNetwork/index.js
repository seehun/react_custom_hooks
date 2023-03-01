import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useNetwork from './useNetwork';

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? 'online' : 'offline');
  };
  const online = useNetwork(handleNetworkChange);

  return (
    <div>
      <h2>{online ? 'online' : 'offline'}</h2>
    </div>
  );
};

export default App;
