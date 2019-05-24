import React from 'react';
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId)
  }

  render () {
    debugger
    const { description, owner_id } = this.props.project 
    // need to fetch owner by owner_id and show here 
    // but before that will need to create user actions to fetch user
    return (
      <div>
        {description}
      </div>
    )

  }
}

export default ProjectShow