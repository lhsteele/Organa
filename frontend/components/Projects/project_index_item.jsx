import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import ProjectShowContainer from './project_show_container'

class ProjectIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      showDetail: false
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
    let modal;
    if (this.state.showModal === true) {
      modal = (
        // this is a fragment
        <>
          <div className="transparent-modal" onClick={() => this.setState({ showModal: false })}></div>
          {/* make this a ul for the new project modal */}
          <div className="dropdown-menu">
            <label className="dynamic-project-name">Edit {this.props.project.name}</label>
            <label className="text-input-label">
              Project Name
              <input
                type="text"
                value={this.props.project.name}
                onChange={this.updateForm("name")}
                className="project-form-name"
              />
            </label>
            <label className="textarea-input-label">
              Description
              <textarea
                value={this.props.project.description}
                onChange={this.updateForm("description")}
                className="project-form-description">
              </textarea>
            </label>
            <div className="submit-button-container">
              <div className="update-form-submit-button">
                <input 
                  type="submit" 
                  value="Update Project" 
                  className="update-input"/>
              </div>
            </div>
          </div>
        </>
      )
    }
    if (this.state.showDetail === true) {
      return (
        // <ProjectShowContainer 
        //   project={this.props.project}
        // />
        <Redirect push to={`/projects/${this.props.project.id}`} />
      )
    }
    return (
      <div className="project-item">
        {/* <button className="project-button" onClick={}> */}
        <div className="project-square"
          onClick={() => this.setState({ showDetail: true })}>
          <div className="project-square-top">
            <div className="project-menu">
              <img className="project-menu-dots"
                src={window.dotsURL}
                onClick={() => this.setState({ showModal: true })}
                onMouseDown={e => e.stopPropagation()}/>
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