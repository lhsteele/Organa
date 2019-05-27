import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class SidebarIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="sidebar-projects-list-items">
        <img className="sidebar-proj-list-tile" src={window.tileURL}/>
        <Link to={`/projects/${this.props.project.id}`}
          className="sidebar-projects-list-link">
          {this.props.project.name}
        </Link>
      </div>
    )
  }
}

export default SidebarIndexItem;