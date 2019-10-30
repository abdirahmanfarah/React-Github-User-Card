import React from 'react';
import User from './User';
import styles from 'styled-components';

const Gitcard = props => {
  console.log(props);
  return (
   <AllCards>
     {props.followers.map(item => (
       <Followers>
         <Img src={item.avatar_url} key={item.id} /> 
         <h3> {item.login}</h3>
       </Followers>
     ))}
   </AllCards>
  )
}
export default Gitcard; 

const AllCards = styles.div `
  display:flex;
  flex-wrap:wrap;
`

const Followers = styles.div`
  display:flex;
  flex-wrap:wrap;
`
const Img = styles.img `
  width:20%;
  margin:auto;
`