import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleIsHidden = this.toggleIsHidden.bind(this)
    this.handleProjectDescriptionDisplay = this.handleProjectDescriptionDisplay.bind(this)
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

  toggleIsHidden() {
    !this.props.isHidden
  }

  handleProjectDescriptionDisplay() {
    if (this.props.isHidden === false) {
      return (
        <textarea
          value={this.state.description}
          onChange={this.updateForm("description")}
          className="project-form-description">
        </textarea>
      )
    } 
  }

  // Edit only allows changing name and description
  // Create has fields for name and button to add a description which
  // makes the text field appear
  render() {
    let descriptionInputMethod;
    let projectDescription;
    let label;
    if (formType === 'Update') {
      label = <label>Edit name_of_project</label>
      descriptionInputMethod = <label>Description</label>
      projectDescription = <textarea
        value={this.state.description}
        onChange={this.updateForm("description")}
        className="project-form-description">
      </textarea>
    } else {
      label = <label>Add project details</label>
      descriptionInputMethod = <Button
        onClick={this.toggleIsHidden}>
        Add a description
      </Button>
      projectDescription = this.handleProjectDescriptionDisplay
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {label}
          <label>Project Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateForm("name")}
            className="project-form-name"
          />
          {descriptionInputMethod}
          {projectDescription}
          <input type="submit" value={`${this.props.formType} project`}/>
        </form>
      </div>
    )
  }
}

export default ProjectForm;