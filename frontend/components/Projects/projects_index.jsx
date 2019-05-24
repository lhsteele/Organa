import React from 'react';
import ProjectIndexItem from './project_index_item';
import { Link } from 'react-router-dom';


class ProjectsIndex extends React.Component {
  componentDidMount() {
    this.props.requestProjects();
  }

  render() {
    debugger
    const projects = this.props.projects.map(project => {
      return (
        <ProjectIndexItem 
          key={project.id}
          project={project}
          deleteProject={this.props.deleteProject}
          openModal={this.props.openModal}
        />
      )
    })
    return(
      <div>
        <ul>
          {projects}
        </ul>
      </div>
    )
  }

}

export default ProjectsIndex;