import React from 'react';
import './App.css';
import axios from 'axios';
import Gitcard from './components/Gitcard';
import User from './components/User'
import styles from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: {},
      followers: []
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
      axios
         .get(`http://api.github.com/users/abdirahmanfarah/followers`)
         .then(res => {
           this.setState({
             followers:res.data
           })
         })
         .catch(err => console.log('Error', err))
    }
 

 
  render(){
    return (
      <All>
        <Header>
          <h1>My Github Page</h1>
        </Header>
          <Main>
            <User 
             myData= {this.state.myData}
            />
            <Gitcard
              followers={this.state.followers}
            />
          </Main>
      </All>
    );
  }
}

export default App;

const All = styles.div `
  background: #282c34;
  width:100%;
`
const Header = styles.div `
  font-size:red;
`
const Main = styles.div `
  display:flex;
  justify-content:center;
`
// const Gitcard = styles.div `
//   display:flex;
//   justify-content: center;
//   flex-wrap:wrap;
// `