import React from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User';

import axios from 'axios';


class App extends React.Component {
  state = {
    user: [],
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/abdirahmanfarah`)
    .then(res => {
      this.setState({
        user:res.data
      });
      console.log(res.data)
      })
      .catch(err => console.log("No Data Found:",  err))
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Users</h1>
        </header>
        <User />
      </div>
    );
  }
}

export default App;
