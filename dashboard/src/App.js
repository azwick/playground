import './App.css';

import Checklist from './Checklist';
import Clock from './Clock';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="grid">
        <Clock/>
        <div>
          <h1>Prio Checkliste</h1>
          <Checklist title='Prio A' count='3' />
          <Checklist title='Prio B' count='3' />
          <Checklist title='Prio C' count='3' />
        </div>
      </div>
    </div>
  );
}

export default App;
