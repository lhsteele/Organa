import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewButtonModal: false,
      newTaskModal: false, 
      showProjectsModal: false,
      userProjects: [],
      projectButtonName: 'Project',
      project: {},
      task: {
        task_name: "",
        task_body: ""
      }
    }
    this.handleClearModal = this.handleClearModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProjectsButtonClick = this.handleProjectsButtonClick.bind(this);
    this.handleSelectProjectClick = this.handleSelectProjectClick.bind(this);
    this.prepTaskForCreate = this.prepTaskForCreate.bind(this);
  }

  handleClearModal(e) {
    e.stopPropagation();
    this.setState({ showNewButtonModal: false })
  }

  prepTaskForCreate() {
    return (
      {
        list_id: this.state.project.listIds[0],
        task_name: this.state.task.task_name,
        task_body: this.state.task.task_body
      }
    )
  }

  handleSubmit(e) {
    e.stopPropagation();
    let task = this.prepTaskForCreate()
    console.log(task)
    this.props.createTask(task)
  }

  updateForm(field) {
    return (e) => {
      const task = this.state.task
      task[field] = e.target.value
      this.setState({ task: task } )
    }
  }

  formatProjects() {
    let projects = [];
    Object.values(this.props.projects).forEach(project => {
      if (project.owner_id === this.props.currentUserId && project.archived === false) {
        projects.push(project)
      }
    })
    return projects
  }

  handleProjectsButtonClick(e) {
    e.stopPropagation();
    this.setState({ showProjectsModal: true });
  }

  handleSelectProjectClick(project) {
    // e.stopPropagation();
    this.setState({ 
      projectButtonName: project.name, 
      showProjectsModal: false, 
      project: project
    })
    this.props.requestLists(project.id)
  }

  render() {
    const firstInitial = this.props.first_name[0]
    const lastInitial = this.props.last_name[0]

    let modal;
    if (this.state.showNewButtonModal === true) {
      modal = (
        <>
          <div
            className="transparent-modal"
            onClick={this.handleClearModal}>
          </div>
          <div className="new-button-dropdown">
            <ul className="new-button-ul">
              <li key={1}
                onClick={() => this.setState({ newTaskModal: true })}>
                <img className="checkbox" src={window.checkURL} />
                Task
              </li>
              <li key={2}>
                <img className="clipboard" src={window.clipboardURL} />
                <Link to="/projects/new"
                  className="new-button-dropdown-link">
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </>
      )
    }
    
    let projectModal;
    if (this.state.showProjectsModal === true) {
      projectModal = (
        <>
          <div className="project-modal-div" onClick={this.handleClearModal}></div>
          <ul className="project-modal-ul">
            {/* {projects} */}
            {this.formatProjects().map(project => {
              return(
                <li 
                  key={project.id}
                  className="project-modal-li"
                  onClick={() => this.handleSelectProjectClick(project)}>
                  {project.name}  
                </li>
              )
            })}
          </ul>
        </>
      )
    }

    let newTaskModal;
    if (this.state.newTaskModal === true) {
      newTaskModal = (
        <div className="new-task-modal">
          <div className="new-task-modal-nav">
            <div onClick={() => this.setState({ newTaskModal: false})} className="new-task-close-x">X</div>
          </div>
          <form onSubmit={this.handleSubmit}
            className="nav-bar-new-task-form">
            <input 
              type="text"
              value={this.state.task.task_name}
              placeholder="Task Name"
              onChange={this.updateForm("task_name")}
              className="new-task-name-input" />
            
            <div className="new-task-form-labels">
              <label className="new-task-for">For</label>
              <label className="user-name">
                <div className="new-task-initials">{firstInitial}{lastInitial}</div>
                {this.props.first_name}{this.props.last_name}
              </label>
              <label className="in">in</label>
              <div 
                className="project-select-button"
                onClick={this.handleProjectsButtonClick}>
                {this.state.projectButtonName}
              </div>
            </div>
            <div>
              <textarea 
                onChange={this.updateForm("task_body")}
                value={this.state.task.task_body}
                className="description-input"
                placeholder="Description" />
              <input 
                type="submit"
                value="Create Task"
                className="new-task-submit"/>
                {/* onClick={this.handleSubmit}/ */}
            </div>
            {projectModal}
          </form>
        </div>
      )
    }

    return (
      <div className="homepage-nav">
        <div className="home-nav-buttons">
          <div className="home-nav-new-button">
            <button
              className="new-button"
              onClick={() => this.setState({ showNewButtonModal: true })}>
              + New
            </button>
            {modal}
          </div>
          <div className="hover-div">
            <button
              className="profile-dropdown-button"
              onClick={() => this.props.openModal('profile')}>
              {firstInitial}{lastInitial}
            </button>
            <div className="profile-hover-dropdown-content">
              <label>
                {this.props.first_name} {this.props.last_name}
              </label>
            </div>
          </div>
        </div>
        {newTaskModal}
      </div>
    )
  }
}

export default NavBar;