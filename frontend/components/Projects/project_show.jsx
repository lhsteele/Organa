import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  componentDidMount() {
    // this.props.requestProject(this.props.project.id)
    this.props.requestProject(this.props.match.params.projectId)
  }

  render () {
    return (
      <div>
        THIS IS RENDERING THE SHOW
        {this.props.project.description}
      </div>
    )

  }
}

export default ProjectShow