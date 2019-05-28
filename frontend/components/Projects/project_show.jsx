import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import SidebarContainer from '../Home/sidebar_container';
import NavBarContainer from '../Home/navbar_container';
import ListShowContainer from '../Lists/list_show_container';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      menuModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showArchive: false,
      archived: this.props.project.archived || false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearModal = this.handleClearModal.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.checkArchived = this.checkArchived.bind(this);
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
    this.checkArchived();
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateProject(this.state.project)
      .then(this.setState({ showEditModal: false }))
  }

  handleDelete(e) {
    this.props.deleteProject(this.props.project.id);
    this.setState({ showDeleteModal: false });
    this.props.history.push(`/home`);
  }

  handleArchive(e) {
    this.setState({ showArchive: true, menuModal: false, archived: true });
    this.props.archiveProject(this.props.project.id);
  }

  // onClick = {() => this.setState({ showArchive: true, menuModal: false, archived: true }),
  //   this.handleArchive}>

  handleRestore(e) {
    this.setState({ showArchive: false, menuModal: false });
    this.props.archiveProject(this.props.project.id);
  }

  checkArchived() {
    if (this.state.archived === true) {
      this.setState({ showArchive: true })
    }
  }

  handleClearModal(e) {
    e.stopPropagation();
    this.setState({ 
      menuModal: false,
      showEditModal: false,
      showDeleteModal: false,
      showArchive: false
    })
  }

  updateForm(field) {
    return (e) => {
      this.setState({ project: 
        { [field]: e.target.value,
          id: this.props.project.id
        }
      })
    }
  }

  render () {
    let menu;
    if (this.state.menuModal === true) {
      menu = (
        <div>
          <div className="transparent-modal" onClick={this.handleClearModal}></div>
          <div className="showpage-edit-dropdown">
            <ul className="edit-dropdown-ul">
              <li 
                key={1}
                onClick={() => this.setState({ showEditModal: true, menuModal: false })}>
                Edit Name & Description...
              </li>
              <li
                key={2}
                onClick={this.handleArchive}>
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
            defaultValue={this.props.project.description}
            onChange={this.updateForm("description")}
            className="edit-project-form-description">
          </textarea>
        </>
      )
    }

    let editModal;
    if (this.state.showEditModal === true) {
      if (this.props.project.description) {
        editModal = (
          // this is a fragment
          <>
            <div className="transparent-modal" onClick={this.handleClearModal}></div>
            <form className="edit-modal"
              onSubmit={this.handleSubmit}>
              <div className="edit-modal-label">
                <label className="dynamic-project-name">Edit
                <span className="edit-project-name">{this.props.project.name}</span>
                </label>
                <div onClick={this.handleClearModal} className="edit-close-x">X</div>
              </div>
              <label className="text-input-label">
                Project Name
                <input
                  type="text"
                  defaultValue={this.props.project.name}
                  onChange={this.updateForm("name")}
                  className="project-form-name"
                />
              </label>
              <label className="textarea-input-label">
                Description
                <textarea
                  defaultValue={this.props.project.description}
                  onChange={this.updateForm("description")}
                  className="edit-project-form-description">
                </textarea>
              </label>
              <div className="submit-button-container">
                <div className="update-form-submit-button">
                  <input
                    type="submit"
                    defaultValue="Update Project"
                    className="update-input" />
                </div>
              </div>
            </form>
          </>
        )
      } else {
        editModal = (
          // this is a fragment
          <>
            <div className="transparent-modal" onClick={this.handleClearModal}></div>
            <form className="edit-modal"
              onSubmit={this.handleSubmit}>
              <div className="edit-modal-label">
                <label className="dynamic-project-name">Edit
                <span className="edit-project-name">{this.props.project.name}</span>
                </label>
                <div onClick={this.handleClearModal} className="edit-close-x">X</div>
              </div>
              <label className="text-input-label">
                Project Name
                <input
                  type="text"
                  defaultValue={this.props.project.name}
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
                    defaultValue="Update Project"
                    className="update-input" />
                </div>
              </div>
            </form>
          </>
        )
      }
    }

    let archive;
    if (this.state.showArchive === true) {
      // {this.handleArchive}
      archive = (
        <div className="show-archive-bar">
          <div className="show-archive-left">
            <img className="archive-box-img" src={window.fileBoxURL}/>
            <label className="archive-msg">This project is archived.</label>
          </div>
          <button 
            className="archive-restore-button"
            onClick={() => this.setState({ showArchive: false, menuModal: false }),
            this.handleRestore}>
            Restore
          </button>
        </div>
      )
    }

    let deleteModal;
    if (this.state.showDeleteModal === true) {
      deleteModal = (
        <>
          <div className="grey-modal" onClick={this.handleClearModal}></div>
          <div className="delete-modal">
            <label className="delete-modal-header">Delete the "{this.props.project.name}" project?</label>
            <label className="delete-modal-subHeader">
              This will delete the project and any unassigned tasks that are 
              only in this project.
            </label>
            <div className="delete-modal-buttons">
              <button 
                className="cancel-delete-button"
                onClick={this.handleClearModal}>
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
<<<<<<< HEAD
                {/* <ListShowContainer project={this.props.project}/> */}
=======
                {this.props.project ? (
                  <ListListShowContainer 
                    projectId={this.props.match.params.projectId}
                    project={this.props.project}/>
                ) : null } 
>>>>>>> a3b1aed... Tasks showing on List Show page
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