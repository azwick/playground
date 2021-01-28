import './index.css';

// import Checklist from './Checklist';
import ChecklistNew from './ChecklistNew';
import Clock from './Clock';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="App">
      <div className="grid">
        <Clock/>
        <div>
          <h1>Prio Checkliste</h1>
          {/* <Checklist title='Prio A' maxCount={3} />
          <Checklist title='Prio B' maxCount={5} />
          <Checklist title='Prio C' maxCount={7} /> */}
          <ChecklistNew title='Prio A' maxCount={5} />
          <ChecklistNew title='Prio B' maxCount={6} />
          <ChecklistNew title='Prio C' maxCount={7} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
