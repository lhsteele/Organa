import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    this.props.submitEvent(this.state)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    return (
      <div>
        <div className="task-edit-nav">
          <button>Mark Complete</button>
          <div onClick={this.props.closeModal} className="close-x">X</div>
        </div>
        <input 
          className="task-form-name-input"
          type="text"
          value={this.props.task.task_name}
          onChange={this.updateForm("task_name")}/>
        <div className="task-form-description">
          <img src=""/>
          <textarea 
            value={this.props.task.task_body}
            className="task-form-body-input">
          </textarea>
        </div>
        <label className="task-form-project-label">Project Name here</label>
        
      </div>
    )
  }
}