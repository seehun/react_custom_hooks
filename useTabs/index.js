import './styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useTabs } from './useTabs';

const content = [
  {
    tab: 'section 1',
    content: "i'm the content of the section 1",
  },
  {
    tab: 'section 2',
    content: "i'm the content of the section 2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className='content' style={{ height: '100vh' }}>
      {content.map((content, index) => (
        <button
          onClick={() => {
            changeItem(index);
          }}
        >
          {content.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
