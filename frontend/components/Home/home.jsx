import React from 'react';
import { withRouter } from 'react-router-dom'

const Home = ({ logoutUser }) => {
  return (
    <div>
      <div className="homepage-main">
        <div className="homepage-sidebar">
          <div className="sidebar-logo-group">
            <img className="home-logo-img" src={window.rebelURL} />
            <label className="home-organa">organa</label>
          </div>
        </div>
        <main className="project-index">
          <div className="homepage-nav">
            <label className="home-label">Home</label>
            <div className="home-nav-buttons">
              <button className="new-button">+ New</button>
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
          </div>
        </main>
      </div>
    </div>
  )

}


export default Home