import React from 'react';
import { Link } from 'react-router-dom';
import SidebarContainer from '../Home/sidebar_container';
import NavBarContainer from '../Home/navbar_container';

class ProjectShow extends React.Component {
  componentDidMount() {
    // this.props.requestProject(this.props.project.id)
    this.props.requestProject(this.props.match.params.projectId)
  }

  render () {
    return (
      <div className="window">
        <div className="show-page-main">
          <SidebarContainer />
          <div className="project-show-main">
            <NavBarContainer />
            {this.props.project.description}
          </div>
        </div>
      </div>
    )

  }
}

export default ProjectShow