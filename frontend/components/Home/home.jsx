import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProjectsIndexContainer from '../Projects/projects_index_container';
import ProjectShowContainer from '../Projects/project_show_container';
import SidebarContainer from './sidebar_container';
import NavBarContainer from './navbar_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewButtonModal: false
    }
  }

  componentDidMount() {
    this.props.requestProjects();
  }

  render() {
    const firstInitial = this.props.first_name[0]
    const lastInitial = this.props.last_name[0]

    const projects = this.props.projects.map(project => {
      return (
        <Link to={`/projects/${project.id}`}
        className="sidebar-projects-list-link"
        key={project.id}>
        {project.name}
      </Link>
      )
    })

    // let modal;
    // if (this.state.showNewButtonModal === true) {
    //   modal = (
    //     <>  
    //       <div 
    //         className="transparent-modal" 
    //         onClick={() => this.setState({ showModal: false })}>
    //       </div>
    //       <div className="new-button-dropdown">
    //         <ul className="new-button-ul">
    //           <li key={1}>
    //             <img className="checkbox" src={window.checkURL}/>
    //             Task
    //           </li>
    //           <li key={2}>
    //             <img className="clipboard" src={window.clipboardURL}/>
    //             <Link to="/projects/new"
    //               className="new-button-dropdown-link">
    //               Project
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </>
    //   )
    // }

    return (
      <div className="window">
        <div className="homepage-main">
          <SidebarContainer />
          <main className="project-index">
            <div className="home-nav-header">
              <label className="home-label">Home</label>
              < NavBarContainer />
            </div>
            <div className="outer-tasks-projects-container">
              <ProjectsIndexContainer />
            </div>
          </main>
        </div>
     </div>
    )
  }
}

export default Home