import React from 'react';

const Usercard = props => {
  
  return(
    <div>
      {props.followers.map(item => (
       <div>
          <img src ={item.avatar_url} key={item.id} />
        <h3> {item.login}</h3>
       </div>
      ))}
    </div>
  )
}

export default Usercard;