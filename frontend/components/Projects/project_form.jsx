import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTextArea: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
    let textArea;
    if (this.state.showTextArea === true) {
      textArea = (
        <>
          <textarea
            onChange={this.updateForm("description")}
            className="project-form-description">
          </textarea>
        </>
      )
    } 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add project details</label>
          <label>Project Name</label>
          <input
            type="text"
            onChange={this.updateForm("name")}
            className="project-form-name"
          />
          <label
            onClick={() => this.setState({ showTextArea: true })}>
            Add a description
          </label>
          {textArea}
          <input type="submit" value={`${this.props.formType} project`}/>
        </form>
      </div>
    )
  }
}

export default ProjectForm;