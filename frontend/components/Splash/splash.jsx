import React from 'react';

const Splash = ({ currentUser, openModal, logout }) => {
  
  return (
      <div className="splash-div">
        <nav className="splash-navbar">
          <div className="splash-logo">
            <img className="logo" src="#" />
            <label className="organa">organa</label>
          </div>
          <div className="splashnav-buttons">
            <button 
              className="splashnav-login-button"
              onClick={() => openModal('login')}>
              Login
            </button>
            <button 
              className="splashnav-try-button"
              onClick={() => openModal('signup')}>
              Try for free
            </button>
          </div>  
        </nav>
        <main>
          <h2 className="splash-h2">Make more time for the work that matters most</h2>
        <h3 className="splash-h3">Organa is the work management platform used by the Rebel Alliance to manage peace-keeping operations.</h3>
          <button className="splash-main-try-button" onClick={() => openModal('signup')}>Try for free</button>
        </main>
      </div>
    )

}

export default Splash