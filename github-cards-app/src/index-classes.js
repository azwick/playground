import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // npm install axios // https://www.digitalocean.com/community/tutorials/react-axios-react-de

// https://jscomplete.com/playground/rgs2.7

// Convert an array of records into an array of card components
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

// Render information about a gitHub profile
class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt={profile.name} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

// Read input from the user
class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault(); // Is needed: Otherwise the page gets refreshed!
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: ''}); // If I wanna reset the user name in the input
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userName} onChange={event => this.setState({ userName: event.target.value})} placeholder="GitHub username" required />
        <button>Add card</button>
      </form>
    );
  }
}

// Manage the relation between all the other components
class App extends React.Component {
  // Easiest way -> it will be compiled with Babel into JS
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  // mountNode,
  document.getElementById('root'),
);