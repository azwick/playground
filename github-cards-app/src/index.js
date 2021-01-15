import './index.css';

import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import axios from 'axios';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

const Card = function(props) {
  const profile = props;

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt="" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  )
}
const Form = function(props) {
  const [userName, setUserName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        onChange={(e) => {setUserName(e.target.value)}}
        value={userName} 
        placeholder="GitHub username" 
        required
      />
      <button>Add card</button>
    </form>
  );
}

const App = ({title}) => {
  const state = {
    profiles: testData,
    // profiles: [],
  };
  const addNewProfile = (profileData) => {
    console.log('App', profileData);
  }
  // const [myState, setMyState] = useState([]);

  return (
    <>
      <div className="header">{title}</div>
      <Form onSubmit={addNewProfile} />
      <CardList profiles={state.profiles}/>
    </>
  );
};

// class App extends React.Component {
//   state = {
//     profiles: [],
//   };
//   addNewProfile = (profileData) => {
//     this.setState(prevState => ({
//       profiles: [...prevState.profiles, profileData]
//     }))
//   };
//   render() {
//     return (
//       <div>
//         <div className="header">{this.props.title}</div>
//         <Form onSubmit={this.addNewProfile} />
//         <CardList profiles={this.state.profiles} />
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById('root'),
);