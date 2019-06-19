import React from 'react';
import { withRouter } from 'react-router-dom';
import EditTaskFormContainer from './edit_task_form_container';
import TaskIndexItem from './task_index_item';

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.task
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  updateTask(task_name, list_id) {
    return (
     {
        id: this.state.id,
        list_id: list_id,
        task_name: task_name,
        section_name: this.state.section_name || "",
        task_body: this.state.task_body || "",
        complete: this.state.complete || false
      }
    )
  }

  // handleSubmit(e) {
  //   this.props.submitEvent(this.state)
  // }

  updateForm(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.stopPropagation();
    let task = this.updateTask(this.state.task_name, this.props.listId)
    if (this.props.formType === 'new') {
      this.props.createTask(task)
      .then(this.props.closeElement)
    } else {
      this.props.updateTask(task)
        .then(this.props.closeElement)
    }
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.deleteTask(this.state.id);
    this.props.closeElement();
  }

  render() {
    return (
      <form className="task-form">
        <div className="task-edit-nav">
          <button type="button" 
            className="complete-button"
            onClick={this.handleDelete}>
            <img 
              src={window.onlyCheckURL} 
              className="only-check-img"/>
            Mark Complete
          </button>
          <div onClick={this.props.closeElement} className="task-close-x">X</div>
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
          <button 
            type="submit" 
            onClick={this.handleSubmit}
            className="new-task-save-button">
            Save
          </button>
        </div>
      </form>
    )
  }
}

export default TaskForm;