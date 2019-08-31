import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProjectsIndexContainer from '../Projects/projects_index_container';
import ProjectShowContainer from '../Projects/project_show_container';
import SidebarContainer from './sidebar_container';
import NavBarContainer from './navbar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewButtonModal: false
    }
  }


  render() {

    return (
      <div className="window">
        <div className="homepage-main">
          <SidebarContainer />
          <main className="project-index">
            <div className="home-nav-header">
              <label className="home-label">Home</label>
              < NavBarContainer />
            </div>
            <div className="outer-tasks-projects-container">
              <ProjectsIndexContainer />
            </div>
          </main>
        </div>
     </div>
    )
  }
}

export default Home