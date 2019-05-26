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
            <div className="show-nav-header">
              <div className="show-nav-left">
                <img className="project-color-tile " src={window.tileURL} />
                <label className="show-label">{this.props.project.name}</label>
                <img className="grey-dots" src={window.dotsGreyURL}/>
              </div>
              <NavBarContainer />
            </div>
            <div className="tasks-main">
              <div className="tasks-index">
                <ul>
                  Task list goes here
                </ul>
              </div>
              <div className="project-description">
                <label className="description">Description</label>
                <p className="description-input">{this.props.project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default ProjectShow