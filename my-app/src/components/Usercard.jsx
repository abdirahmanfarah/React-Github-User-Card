import React from 'react';

const Usercard = props => {
  
  return(
    <div className='followers-container'>
      {props.followers.map(item => (
       <div className='indi'>
          <img src ={item.avatar_url} key={item.id} />
        <h3> {item.login}</h3>
       </div>
      ))}
    </div>
  )
}

export default Usercard;