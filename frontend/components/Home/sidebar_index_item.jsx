import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class SidebarIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.checkArchived = this.checkArchived.bind(this)
  }

  checkArchived() {
    debugger
    if (this.props.project.archived === true) {
      this.setState({ showArchive: true })
    }
  }

  render() {
    return(
      <div className="sidebar-projects-list-items">
        <img className="sidebar-proj-list-tile" src={window.tileURL}/>
        <Link to={`/projects/${this.props.project.id}`}
          className="sidebar-projects-list-link"
          onClick={this.checkArchived}>
          {this.props.project.name}
        </Link>
      </div>
    )
  }
}

export default SidebarIndexItem;