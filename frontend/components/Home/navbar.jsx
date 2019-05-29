import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNewButtonModal: false,
      newTaskModal: false, 
      task: {
        task_name: "",
        complete: false, 
        list_id: props.listId
      }
    }
    this.handleClearModal = this.handleClearModal.bind(this);
  }

  handleClearModal(e) {
    e.stopPropagation();
    this.setState({ showNewButtonModal: false })
  }

  handleSubmit(e) {
    e.stopPropagation();
    this.props.createTask(this.state)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ task: { [field]: e.target.value } })
    }
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
              placeholder="Task Name"
              onChange={this.updateForm("task_name")}
              className="new-task-name-input" />
            <div className="new-task-form-labels">
              <label className="new-task-for">For</label>
              <label>
                <div className="new-task-initials">{firstInitial}{lastInitial}</div>
                {this.props.first_name}{this.props.last_name}
              </label>
              <label>in</label>
              <button>Project</button>
            </div>
            <input 
              type="text"
              className=""
              placeholder="Description"/>
            <input 
              type="submit"
              value="Create Task"
              onClick={this.handleSubmit}/>
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