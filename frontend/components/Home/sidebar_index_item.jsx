import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import ProjectShowContainer from '../Projects/project_show_container';

class SidebarIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.checkArchived = this.checkArchived.bind(this)
    this.fetchListAndTasks = this.fetchListAndTasks.bind(this)
  }

  checkArchived() {
    if (this.props.project.archived === true) {
      this.setState({ showArchive: true })
    }
  }

  fetchListAndTasks() {
    let tasks = (
      this.props.requestLists(this.props.project.id)
        .then(lists => {
          this.props.requestTasks(
            Object.keys(lists)[0]
          )
        })
    )
    this.setState({ entities: { tasks: tasks}})
    this.props.history.push(`/projects/${this.props.project.id}`)
  }

  render() {
    return(
      <div className="sidebar-projects-list-items">
        <img className="sidebar-proj-list-tile" src={window.tileURL}/>
        {/* <div className="sidebar-projects-list-link"
          onClick={this.fetchListAndTasks}>
          {this.props.project.name}
        </div> */}
        <Link to={`/projects/${this.props.project.id}`}
          className="sidebar-projects-list-link"
          onClick={this.checkArchived}>
          {this.props.project.name}
        </Link>
      </div>
    )
  }
}

export default withRouter(SidebarIndexItem);