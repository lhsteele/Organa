import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';


class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTasks: false, 
      showProjects: false,
      userProjects: []
    }
  }

  componentDidMount() {
    this.props.requestProjects()
      .then(() => (this.fetchUsersProjects()));
  }

  fetchUsersProjects() {
    let projects = [];
    this.props.projects.forEach(project => {
      if (project.owner_id === this.props.currentUserId) {
        projects.push(project)
      }
    })
    this.setState({userProjects: projects})
  }

  render() {
    let tasks;
    let projects;
    if (this.state.showProjects === true) {
      projects = (
        this.state.userProjects.map(project => {
          return (
            <ProjectIndexItem
              key={project.id}
              project={project}
              deleteProject={this.props.deleteProject}
              openModal={this.props.openModal}
              modalType={this.props.modalType}
              updateProject={this.props.updateProject}
              requestProject={this.props.requestProject}
            />
          )
        })
      )
    } 

    return(
      <div className="tasks-projects-container">
        <div className="tasks-section">
          <label className="tasks-section-label">Tasks</label>
        </div>
        <div className="recent-projects-container">
          <div className="recent-projects-label-group">
            <img src={window.arrowURL}
              className="recent-projects-dropdown-arrow"
              onClick={() => this.setState({ showProjects: true })} />
            <label className="recent-projects-label">
              Recent Projects
            </label>
          </div>
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