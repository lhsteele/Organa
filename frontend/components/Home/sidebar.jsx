import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SidebarIndexItem from './sidebar_index_item';


class Sidebar extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      userProjects: []
    }
  }

  componentDidMount() {
    this.props.requestProjects()
      .then(() => (this.fetchUsersProjects()));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projects !== this.props.projects) {
      this.fetchUsersProjects();
    }
  }

  fetchUsersProjects() {
    let projects = [];
    Object.values(this.props.projects).forEach(project => {
      if (project.owner_id === this.props.currentUserId && project.archived === false ) {
        projects.push(project)
      }
    })
    this.setState({userProjects: projects})
  }

  render() {
    const projects = this.state.userProjects.map(project => {
      return (
        <SidebarIndexItem 
          key={project.id}
          project={project}
        />
      )
    })

    return (
      <div className="homepage-sidebar">
        <div className="sidebar-logo-group">
          <img className="home-logo-img" src={window.rebelURL} />
          <label className="home-organa">organa</label>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-home" key={1}>
            <img className="sidebar-home-img" src={window.homeURL} />
            <Link to="/home"
              className="home-link">
              Home
                </Link>
          </li>
          <li className="sidebar-placeholder-li" key={2}></li>
          <li className="sidebar-placeholder-li" key={3}></li>
          <li className="sidebar-placeholder-li" key={4}></li>
        </ul>
        <div className="fav-reports-features-placeholder"></div>
        <ul className="sidebar-team-section">
          <Link to="#"
            className="sidebar-team-link"
            key={1}>
            Team Name Here
              </Link>
        </ul>
        <ul className="side-bar-projects-ul">
          {projects}
        </ul>
        <div className="img-container">
          <img className="sidebar-img" src={window.sidebarImgURL}/>
        </div>
      </div>
    )
  }

}

export default Sidebar;