import './styles.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import useConfirm from './useConfirm';

const App = () => {
  const deleteWorld = () => console.log('delete the world');
  const abort = () => console.log('aborted');
  const confirmDelete = useConfirm('are u sure?', deleteWorld, abort);

  return (
    <div>
      <button onClick={confirmDelete}>delete the world</button>
    </div>
  );
};

export default App;
