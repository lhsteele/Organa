import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import ProjectShowContainer from './project_show_container'

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showDetail: false,
      showModalMenu: false,
      showTextArea: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEvent(this.state)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    let modalMenu;
    if (this.state.showModalMenu === true) {
      modalMenu = (
        <div>
          <div className="transparent-modal" onClick={() => this.setState({ showModal: false })}></div>
          <div className="edit-dropdown">
            <ul className="edit-dropdown-ul">
              <li onClick={
                () => this.setState({ showModal: true, showModalMenu: false })}>
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
            value={this.props.project.description}
            onChange={this.updateForm("description")}
            className="edit-project-form-description">
          </textarea>
        </>
      )
    }

    let modal;
    if (this.state.showModal === true) {
      modal = (
        // this is a fragment
        <>
          <div className="edit-transparent-modal" onClick={() => this.setState({ showModal: false })}></div>
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
                  className="update-input"/>
              </div>
            </div>
          </form>
        </>
      )
    }

    if (this.state.showDetail === true) {
      return (
        <Redirect push to={`/projects/${this.props.project.id}`} />
      )
    }
    return (
      <div className="project-item">
        {/* <button className="project-button" onClick={}> */}
        <div className="project-square">
          {/* onClick={() => this.setState({ showDetail: true })}> */}
          <div className="project-square-top">
            <div className="project-menu">
              <img className="project-menu-dots"
                src={window.dotsURL}
                onClick={() => this.setState({ showModalMenu: true })}/>
                <p onClick={this.stopPropagation}></p>
              {modalMenu}
              {modal}
            </div> 
          </div>
          <img className="hamburger-img" src={window.hamburgerURL}/>
        </div>
        
        <label className="project-name-label">{this.props.project.name}</label>
      </div>
    )
  }
}

export default ProjectIndexItem;