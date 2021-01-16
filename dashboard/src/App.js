import './App.css';

import Clock from './Clock';
import MyClock from './MyClock';
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <Clock/>
      <MyClock/>
    </div>
  );
}

export default App;
