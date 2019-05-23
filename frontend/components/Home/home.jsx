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
          <ul id="profile-dropdown" className="profile-dropdown hidden">
            <li>
              <ul className="profile-dropdown-projects"></ul>
            </li>
            <li>
              <ul className="profile-dropdown-user">
                <li className="profile-dropdown-logout" onClick={logoutUser}>Log Out</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <main>
       
      </main>
    </div>
  )

}


export default Home