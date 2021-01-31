import GetIt from './GetIt';
// import TutorialRandomJoke from './TutorialRandomJoke';
import MapIt from './MapIt';
import React from 'react';
import ToggleIt from './ToggleIt';

function App() {
  return (
    <div className="App">
      <h1>Map it</h1>
      <MapIt/>
      <hr/>
      <h1>Get it</h1>
      <GetIt/>
      <hr/>
      <h1>Toggle it</h1>
      <ToggleIt/>
      {/* <TutorialRandomJoke/> */}
    </div>
  );
}

export default App;
