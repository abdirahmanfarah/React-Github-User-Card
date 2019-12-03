import React from 'react';

const User = props => {
  return(
    <div className="Main-Card">
      <img src={props.user.avatar_url} alt="me" />
      <p>{props.user.name}</p>
      <p>{props.user.location}</p>
    </div>
  )
}

export default User;