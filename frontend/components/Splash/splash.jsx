import React from 'react';

const Splash = ({ currentUser, openModal, logout }) => {
  const splashPage = () => (
    <div>
      <nav className="splash-navbar">
        {/* logo image */}
        <img src="#" />
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
      </nav>
      <main>
        <h2>Make more time for the work that matters most</h2>
        <h3>Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business</h3>
        <button onClick={() => openModal('signup')}>Try for free</button>
      </main>
    </div>
  )

  const homePage = () => (
    <div>
      <nav>
        <button 
          className="home-logout-button" 
          onClick={logout}>
          Logout
        </button>
      </nav>
      <main>
        <h1>Project Index</h1>
      </main>
      <div className="home-sidenav">Sidebar here</div>
    </div>
  )

  return (
    currentUser ? homePage(currentUser, logout) : splashPage()
  )
}

export default Splash