import React from 'react';


const User = props => {
  console.log(props);
  return(
    <div>
      <img className="img" src={props.myData.avatar_url} alt="me" />
      <p>{props.myData.name}</p>
      <p>{props.myData.location}</p>
    </div>
  )
}
export default User;