import React from 'react';

const Splash = ({ currentUser, openModal, logout }) => {
  
  return (
      <div>
        <nav className="splash-navbar">
          {/* logo image */}
          <img src="#" />
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
          <h2>Make more time for the work that matters most</h2>
          <h3>Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business</h3>
          <button onClick={() => openModal('signup')}>Try for free</button>
        </main>
      </div>
    )

}

export default Splash