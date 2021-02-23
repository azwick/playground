import './index.css';

import Checklist from './Checklist/Checklist';
import Clock from './Clock';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Clock/>
        <div className="grid">
          <Checklist title='Prio A' maxCount={5} />
          <Checklist title='Prio B' maxCount={6} />
          <Checklist title='Prio C' maxCount={7} />
        </div>
      </div>
    </div>
  );
}

export default App;