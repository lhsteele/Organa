import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProjectsIndexContainer from '../Projects/projects_index_container';
import ProjectShowContainer from '../Projects/project_show_container';

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
        <div>
          <ProjectsIndexContainer />
        </div>
     </div>
    )
  }
}

export default Home