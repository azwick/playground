import './index.css';

// https://reactjs.org/docs/hooks-state.html
import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios';

// Convert an array of records into an array of card components
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

// Render information about a gitHub profile
const Card = (props) => (
    <div className="github-profile">
      <img src={props.avatar_url} alt={props.name} />
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="company">{props.company}</div>
      </div>
    </div>
  );

// Read input from the user
const Form = function(state, props) {
  state = { userName: '' };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${state.userName}`);
    props.onSubmit(resp.data);
    // ToDo: setState -> useState 
    setState({ userName: ''});
  };
  return (
    <form onSubmit={handleSubmit}>
          {/* ToDo: setState -> useState */ }
      <input type="text" value={state.userName} onChange={event => setState({ userName: event.target.value})} placeholder="GitHub username" required />
      <button>Add card</button>
    </form>
  );
};

// Manage the relation between all the other components
const App = function(props, state) {
  state = {
    profiles: [],
  };
  const addNewProfile = (profileData) => {
    // ToDo: setState -> useState 
    setState = (prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  return (
    <div>
      <div className="header">{props.title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={state.profiles} />
    </div>
  );
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById('root'),
);