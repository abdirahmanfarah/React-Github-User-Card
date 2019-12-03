import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from '../src/components/User';
import Usercard from '../src/components/Usercard';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      followers: []
    }
 }
    componentDidMount() {
      axios.get(`https://api.github.com/users/abdirahmanfarah`)
        .then(response => {
          console.log(response)
          this.setState({
            user:response.data
          })
        })
        .catch(err => console.log( `Error`, err))
        axios.get(`https://api.github.com/users/abdirahmanfarah/followers`)
          .then(response => {
            console.log(response)
            this.setState({
              followers: response.data
            })
          })
        .catch(err => console.log(`Error`, err))
    }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Followers</h1>
          <div>
            <User user={this.state.user} />
          </div>
          <div>
            <Usercard followers={this.state.followers} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
