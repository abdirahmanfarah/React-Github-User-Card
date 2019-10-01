import React from 'react';
import './App.css';

import axios from 'axios';


class App extends React.Component {
  constructor(){
    super();
      this.state = {
        userData: {},
        followers: [],
  }
}


  componentDidMount() {
    axios
    .get(`https://api.github.com/users/abdirahmanfarah`)
    .then(res => {
      this.setState({
        userData:res.data
      });
      console.log(res.data)
      })
      .catch(err => console.log("No Data Found:",  err))
  }
  componentDidUpdate() {
    axios
      .get(`http://api.github.com/users/abdirahmanfarah/followers`)
      .then(res => {
        this.setState({
          followers:res.data
        });
        console.log(res.data)
      })
      .catch(err => console.log("No Data Found:",  err))
  }
 
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>Github Users 12123</h1>
        </header>
        <div className="body">
          <div>
            <img width="20%" src={this.state.userData.avatar_url} key={this.state.userData.id} />
            <p>{this.state.userData.name}</p>
          </div>
        

        {this.state.followers.map(follower => (
          <div>
          <img width="10%" src={follower.avatar_url} key={follower.id} />
          
          </div>
        ))}
        </div>
      
    </div>

    );
  }
}

export default App;
