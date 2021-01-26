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
          <Checklist title='Prio A' maxCount={3} />
          <Checklist title='Prio B' maxCount={5} />
          <Checklist title='Prio C' maxCount={7} />
        </div>
      </div>
    </div>
  );
}

export default App;
