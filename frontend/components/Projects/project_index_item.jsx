import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import ProjectShowContainer from './project_show_container'

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showDetail: false,
      showModalMenu: false,
      showTextArea: false,
      project: {
        name: this.props.project.name,
        description: this.props.project.description || ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.handleMenuChildClick = this.handleMenuChildClick.bind(this);
    this.handleEditDropdownChildClick = this.handleEditDropdownChildClick.bind(this);
    this.handleClearModalsClick = this.handleClearModalsClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.updateProject(this.state.project)
      .then(() => this.setState({ showModal: false }))
  }

  updateForm(field) {
    return (e) => {
      this.setState({ project:
        {
          [field]: e.target.value,
          id: this.props.project.id
        }
      })
    }
  }

  handleMenuChildClick(e) {
    e.stopPropagation();
    this.setState({ showModalMenu: true })
  }

  handleEditDropdownChildClick(e) {
    e.stopPropagation();
    this.setState({ showModal: true, showModalMenu: false})
  }

  handleClearModalsClick(e) {
    e.stopPropagation();
    this.setState({
      showModal: false,
      showDetail: false,
      showModalMenu: false,
      showTextArea: false
    })
  }

  handleFormClick(e) {
    e.stopPropagation();
  }

  render() {
    let modalMenu;
    if (this.state.showModalMenu === true) {
      modalMenu = (
        <div>
          <div className="transparent-modal" onClick={this.handleClearModalsClick}></div>
          <div className="edit-dropdown">
            <ul className="edit-dropdown-ul">
              <li onClick={this.handleEditDropdownChildClick}>
                Edit Name & Description...
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
            value={this.state.project.description}
            id="description"
            onChange={this.updateForm("description")}
            className="edit-project-form-description">
          </textarea>
        </>
      )
    }

    let modal;
    if (this.state.showModal === true) {
      if (this.state.project.description) {
        modal = (
          // this is a fragment
          <>
            <div className="grey-modal" onClick={this.handleClearModalsClick}></div>
            <form className="edit-modal"
              onClick={this.handleFormClick}
              onSubmit={this.handleSubmit}>
              <div className="edit-modal-label">
                <label className="dynamic-project-name">Edit
                <span className="edit-project-name"> {this.props.project.name}</span>
                </label>
                <div onClick={this.handleClearModalsClick} className="edit-close-x">X</div>
              </div>
              <label className="text-input-label">
                Project Name
                <input
                  type="text"
                  id="name"
                  value={this.state.project.name}
                  onChange={this.updateForm("name")}
                  className="project-form-name"
                />
              </label>
              <label
                className="textarea-input-label">
                Description
                <textarea
                  value={this.state.project.description}
                  id="description"
                  onChange={this.updateForm("description")}
                  className="edit-project-form-description">
                </textarea>
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
      } else {
        modal = (
          // this is a fragment
          <>
            <div className="grey-modal" onClick={this.handleClearModalsClick}></div>
            <form className="edit-modal"
              onClick={this.handleFormClick}
              onSubmit={this.handleSubmit}>
              <div className="edit-modal-label">
                <label className="dynamic-project-name">Edit 
                <span className="edit-project-name"> {this.props.project.name}</span>
                </label>
                <div onClick={this.handleClearModalsClick} className="edit-close-x">X</div>
              </div>
              <label className="text-input-label">
                Project Name
                <input
                  type="text"
                  id="name"
                  value={this.state.project.name}
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
                    className="update-input"/>
                </div>
              </div>
            </form>
          </>
        )
      }
    }

    if (this.state.showDetail === true) {
      return (
        <Redirect push to={`/projects/${this.props.project.id}`} />
      )
    }
    return (
      <div className="project-item">
        <div className="project-square"
          onClick={() => this.setState({ showDetail: true })}>
          <div className="project-square-top">
            <div className="project-menu">
              <img className="project-menu-dots"
                src={window.dotsURL}
                onClick={this.handleMenuChildClick}/>
              {modalMenu}
              {modal}
            </div> 
          </div>
          <img className="hamburger-img" src={window.hamburgerURL}/>
        </div>
        
        <label className="project-name-label">{this.state.project.name}</label>
      </div>
    )
  }
}

export default withRouter(ProjectIndexItem);