import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTextArea: false,
      name: "",
      description: "",
      owner_id: props.currentUserId,
      archived: false, 
      list: {
        project_id: null
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitEvent(this.state)
      .then(() => this.props.createList(this.state.list))
    this.props.history.push(`/home`)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    let textArea;
    if (this.state.showTextArea === true) {
      textArea = (
        <>
          <textarea
            onChange={this.updateForm("description")}
            className="new-project-form-description">
          </textarea>
        </>
      )
    } 
    return (
      <div className="new-project-form-container">
        <form onSubmit={this.handleSubmit}
          className="new-project-form">
          <label className="new-project-label">Add project details</label>
          <label className="new-project-name-label">Project Name</label>
          <input
            type="text"
            onChange={this.updateForm("name")}
            className="project-form-name-input"
          />
          <label
            onClick={() => this.setState({ showTextArea: true })}
            className="new-project-description-toggle-label">
            Add a description
          </label>
          {textArea}
          <input 
            type="submit" 
            value={`${this.props.formType} project`}
            className="new-project-submit-button"
          />
        </form>
      </div>
    )
  }
}

export default ProjectForm;