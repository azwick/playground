import GetIt from './GetIt';
// import TutorialRandomJoke from './TutorialRandomJoke';
import MapIt from './MapIt';
import React from 'react';
import ToggleIt from './ToggleIt';

function App() {
  return (
    <div className="App">
      <MapIt/>
      <hr/>
      <GetIt/>
      <hr/>
      <ToggleIt/>
      {/* <TutorialRandomJoke/> */}
    </div>
  );
}

export default App;
