import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestProjects();
  }

  render() {
    const projects = this.props.projects.map(project => {
      return (
        <ProjectIndexItem 
          key={project.id}
          project={project}
          deleteProject={this.props.deleteProject}
          openModal={this.props.openModal}
          modalType={this.props.modalType}
        />
        )
    })

    return(
      <div className="tasks-projects-container">
        <div className="tasks-section">
          <label className="tasks-section-label">Tasks</label>
        </div>
        <div className="recent-projects-container">
          <label className="recent-projects-label">Recent Projects</label>
          <ul className="recent-projects-index-ul">
            {projects}
            <Link className="new-project-item"
              to="/projects/new">
              <button className="new-project-button"> + </button>
              <label className="new-project-label">New Project</label>
            </Link>
          </ul>
        </div>
      </div>
    )
  }

}

export default ProjectsIndex;