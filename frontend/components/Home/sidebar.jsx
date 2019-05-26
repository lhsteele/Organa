import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class Sidebar extends React.Component {
  constructor(props) {
    super(props) 

  }

  componentDidMount() {
    this.props.requestProjects();
  }

  render() {
    const projects = this.props.projects.map(project => {
      return (
        <Link to={`/projects/${project.id}`}
          className="sidebar-projects-list-link"
          key={project.id}>
          {project.name}
        </Link>
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