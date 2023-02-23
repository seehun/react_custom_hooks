import './styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useInput } from './useInput';

const App = () => {
  const NotInclude = (x) => !x.includes('@');
  const name = useInput('Mr.', maxLen);

  return (
    <div className='content' style={{ height: '100vh' }}>
      <input value={name.value} onChange={name.onChange} />
    </div>
  );
};

export default App;
