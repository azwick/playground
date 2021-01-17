import './App.css';

import Checklist from './Checklist';
import Clock from './Clock';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Clock/>
      {/* <Checklist title='Prio A' count='3' /> */}
    </div>
  );
}

export default App;
