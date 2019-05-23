import React from 'react';
import { withRouter, Link } from 'react-router-dom'

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
              <div className="profile-dropdown">
                <button 
                  className="profile-dropdown-button">
                  LO
                </button>
                <div className="profile-hover-dropdown-content">
                  <label>
                    Leia Organa 
                  </label>
                </div>
                <div className="profile-click-dropdown-content">
                  <button className="dropdown-logout-button" onClick={logoutUser}></button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

}


export default Home