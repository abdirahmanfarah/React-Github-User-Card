import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: {}
    }
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/abdirahmanfarah`)
      .then(res => {
        this.setState({
          myData:res.data
        })
      })
      .catch(err => console.log('Error', err))
  }
 

 
  render(){
    return (
      <div className="App">
        <div className="header">
          <h1>My Github Page</h1>
        </div>
          <div className="body">
            <User
              myData= {this.state.myData}
            />
          </div>
      </div>
    );
  }
}

export default App;
