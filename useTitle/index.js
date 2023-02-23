import './styles.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTitle } from './useTitle';

const App = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => {
    titleUpdater('change');
  }, 5000);

  return <div className='content' style={{ height: '100vh' }}></div>;
};

export default App;
