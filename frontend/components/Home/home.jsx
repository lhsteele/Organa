import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    const firstInitial = this.props.first_name[0]
    const lastInitial = this.props.last_name[0]
    // const { openModal } = this.props.openModal
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
                {/* c handler will dispatch the open modal function with 'profile' passed in */}
                  <div>
                    <button 
                      className="profile-dropdown-button" 
                      onClick={() => this.props.openModal('profile')}>
                      {firstInitial}{lastInitial}
                    </button>
                    <div className="profile-hover-dropdown-content">
                      <label>
                        {this.props.first_name} {this.props.last_name}
                      </label>
                    </div>
                  </div>                
                </div>
              </div>
          </main>
       </div>
     </div>
    )
  }
}

export default Home