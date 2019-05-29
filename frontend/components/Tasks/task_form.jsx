import React from 'react';
import { withRouter } from 'react-router-dom';
import EditTaskFormContainer from './edit_task_form_container';
import TaskIndexItem from './task_index_item';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state = props.task
    this.state = {
        list_id: props.list,
        task_name: props.task.task_name || "",
        section_name: props.task.section_name || "",
        task_body: props.task.task_body || "",
        complete: props.task.complete || false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleX = this.handleX.bind(this)
  }

  handleSubmit(e) {
    this.props.submitEvent(this.state)
  }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleX(e) {
    e.stopPropagation();
    if (this.props.formType === 'new') {
      this.setState({list_id: this.props.listId})
      debugger
      this.props.createTask(this.state)
        .then(this.props.closeElement)
    } else {
      this.props.updateTask(this.state)
        .then(this.props.closeElement)
    }
  }

  render() {
    return (
      <form className="task-form">
        <div className="task-edit-nav">
          <button className="complete-button"
            onClick={() => this.props.deleteTask(this.state.id)}>
            <img 
              src={window.onlyCheckURL} 
              className="only-check-img"/>
            Mark Complete
          </button>
          <div onClick={this.handleX} className="task-close-x">X</div>
        </div>
        <div className='task-form-body'>
          <input 
            className="task-form-name-input"
            type="text"
            defaultValue={this.state.name}
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