import React from 'react';
import { withRouter } from 'react-router-dom'

const Home = ({ logoutUser }) => {
  return (
    <div>
      <div>Sidebar</div>
      <nav>
        <label className="home-label">Home</label>
        <div className="home-nav-buttons">
          <button>New</button>
          <button></button>
        </div>
      </nav>
      <main>
       
      </main>
      <button onClick={logoutUser}>Logout</button>
    </div>
  )

}


export default Home