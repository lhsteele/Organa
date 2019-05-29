import React from 'react';
import { withRouter } from 'react-router-dom';
import EditTaskFormContainer from './edit_task_form_container';
import TaskIndexItem from './task_index_item';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.requestTask(this.props.task.id)
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
      <div className="task-form">
        <div className="task-edit-nav">
          <button>Mark Complete</button>
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
        </div>
        <input 
          className="task-form-name-input"
          type="text"
          value={this.props.task.name}
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

export default TaskForm;