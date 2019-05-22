import React from 'react';
import { withRouter } from 'react-router-dom'

const Home = ({ logoutUser }) => {
  return (
    <div>
      <h1>Project Index</h1>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )

}


export default Home