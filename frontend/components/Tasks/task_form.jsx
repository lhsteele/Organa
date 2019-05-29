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
          <button className="complete-button">
            <img src={window.onlyCheckURL} className="only-check-img"/>
            Mark Complete
          </button>
          <div onClick={this.props.closeElement} className="task-close-x">X</div>
        </div>
        {/* <label className="task-form-project-label">Project Name here</label> */}
        <div className='task-form-body'>
          <input 
            className="task-form-name-input"
            type="text"
            value={this.state.name}
            onChange={this.updateForm("task_name")}/>
          <div className="task-form-description">
            <img className="task-form-doc-img" src={window.documentURL}/>
            <p 
              value={this.state.task_body}
              className="task-form-body-input"
              onChange={this.updateForm("task_body")}>
            </p>
          </div>
        </div>
      </form>
    )
  }
}

export default TaskForm;