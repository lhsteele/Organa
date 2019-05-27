import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import SidebarContainer from '../Home/sidebar_container';
import NavBarContainer from '../Home/navbar_container';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      menuModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showArchive: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // this.props.requestProject(this.props.project.id)
    this.props.requestProject(this.props.match.params.projectId)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEvent(this.state)
  }

  handleDelete(e) {
    this.props.deleteProject(this.props.project.id)
    this.setState({ showDeleteModal: false })
    // return <Redirect push to={"/home"} />
    this.props.history.push(`/home`)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render () {
    let menu;
    if (this.state.menuModal === true) {
      menu = (
        <div>
          <div className="transparent-modal" onClick={() => this.setState({ showModal: false })}></div>
          <div className="showpage-edit-dropdown">
            <ul className="edit-dropdown-ul">
              <li 
                key={1}
                onClick={() => this.setState({ showEditModal: true, menuModal: false })}>
                Edit Name & Description...
              </li>
              <li
                key={2}
                onClick={() => this.setState({ showArchive: true, menuModal: false })}>
                Archive Project
              </li>
              <li
                key={3}
                onClick={() => this.setState({ showDeleteModal: true, menuModal: false })}>
                Delete Project
              </li>
            </ul>
          </div>
        </div>
      )
    }

    let textArea;
    if (this.state.showTextArea === true) {
      textArea = (
        <>
          <textarea
            value={this.props.project.description}
            onChange={this.updateForm("description")}
            className="edit-project-form-description">
          </textarea>
        </>
      )
    }

    let editModal;
    if (this.state.showEditModal === true) {
      editModal = (
        // this is a fragment
        <>
          <div className="transparent-modal" onClick={() => this.setState({ showModal: false })}></div>
          <form className="edit-modal"
            onSubmit={this.handleSubmit}>
            <div className="edit-modal-label">
              <label className="dynamic-project-name">Edit
              <span className="edit-project-name"> {this.props.project.name}</span>
              </label>
            </div>
            <label className="text-input-label">
              Project Name
              <input
                type="text"
                value={this.props.project.name}
                onChange={this.updateForm("name")}
                className="project-form-name"
              />
            </label>
            <label
              onClick={() => this.setState({ showTextArea: true })}
              className="textarea-input-label">
              Description
              {textArea}
            </label>
            <div className="submit-button-container">
              <div className="update-form-submit-button">
                <input
                  type="submit"
                  value="Update Project"
                  className="update-input" />
              </div>
            </div>
          </form>
        </>
      )
    }

    let archive;
    if (this.state.showArchive === true) {
      archive = (
        <div className="show-archive-bar">
          <div className="show-archive-left">
            <img className="archive-box-img" src={window.fileBoxURL}/>
            <label className="archive-msg">This project is archived.</label>
          </div>
          <button className="archive-restore-button">Restore</button>
        </div>
      )
    }

    let deleteModal;
    if (this.state.showDeleteModal === true) {
      deleteModal = (
        <>
          <div className="grey-modal" onClick={() => this.setState({ showModal: false })}></div>
          <div className="delete-modal">
            <label className="delete-modal-header">Delete the "{this.props.project.name}" project?</label>
            <label className="delete-modal-subHeader">
              This will delete the project and any unassigned tasks that are 
              only in this project.
            </label>
            <div className="delete-modal-buttons">
              <button 
                className="cancel-delete-button"
                onClick={() => this.setState({ deleteModal: false })}>
                Cancel
              </button>
              <button
                className="delete-button"
                onClick={this.handleDelete}>
                Delete {this.props.project.name}
              </button>
            </div>
          </div>
        </>
      )
    }

    return (
      <div className="window">
        <div className="show-page-main">
          <SidebarContainer />
          <div className="project-show-main">
            <div className="show-nav-header">
              <div className="show-nav-left">
                <img 
                  className="project-color-tile " 
                  src={window.tileURL} />
                <label className="show-label">{this.props.project.name}</label>
                <img 
                  className="grey-dots" 
                  src={window.dotsGreyURL}
                  onClick={() => this.setState({ menuModal: true })} />
                  {menu}
                  {editModal}
                  {deleteModal}
              </div>
              <NavBarContainer />
            </div>
            {archive}
            <div className="tasks-main">
              <div className="tasks-index">
                <ul>
                  Task list goes here
                </ul>
              </div>
              <div className="project-description">
                <label className="description">Description</label>
                <p className="description-input">{this.props.project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default ProjectShow