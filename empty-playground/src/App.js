import ClickIt from './ClickIt';
import FilterIt from './FilterIt';
import GetIt from './GetIt';
// import TutorialRandomJoke from './TutorialRandomJoke';
import MapIt from './MapIt';
import React from 'react';
import ReadIt from './ReadIt';
import ToggleIt from './ToggleIt';
import UseIt from './UseIt';

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
      <hr/>

      <h1>Click it</h1>
      <ClickIt/>
      <hr/>

      <h1>Use it</h1>
      <UseIt/>
      <hr/>

      <h1>Filter it</h1>
      <FilterIt/>
      <hr/>

      <h1>Read it (in progress)</h1>
      <ReadIt/>
      <hr/>

      <br/>
      <br/>
      <br/>
      {/* <TutorialRandomJoke/> */}
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
