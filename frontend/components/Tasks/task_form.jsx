import React from 'react';
import { withRouter } from 'react-router-dom';
import EditTaskFormContainer from './edit_task_form_container';
import TaskIndexItem from './task_index_item';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.task
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
      <form className="task-form">
        <div className="task-edit-nav">
          <button>Mark Complete</button>
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
        </div>
        <input 
          className="task-form-name-input"
          type="text"
          value={this.state.name}
          onChange={this.updateForm("task_name")}/>
        <div className="task-form-description">
          <img src=""/>
          <textarea 
            value={this.state.task_body}
            className="task-form-body-input"
            onChange={this.updateForm("task_body")}>
          </textarea>
        </div>
        <label className="task-form-project-label">Project Name here</label>
      </form>
    )
  }
}

export default TaskForm;