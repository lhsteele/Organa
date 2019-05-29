import React from 'react';
import { Link } from 'react-router-dom';
import ListListShow from '../Lists/list_show';
import EditTaskFormContainer from './edit_task_form_container';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editTaskForm: false, 
      // projectDescription: true
    }
    this.showEditTaskForm = this.showEditTaskForm.bind(this)
    // this.clearEditTaskForm = this.clearEditTaskForm.bind(this)
  }

  showEditTaskForm(e) {
    debugger
    e.stopPropagation();
    this.setState({ editTaskForm: true, projectDescription: false })
  }

  clearEditTaskForm(e) {
    e.stopPropagation();
    this.setState({ editTaskForm: false, projectDescription: true })
  }

  render() {
    let editTaskForm;
    if (this.state.editTaskForm === true ) {
      return editTaskForm = (
        <div>
          Edit Task Form
          <EditTaskFormContainer task={this.props.task} />
        </div>
      )
    }

    // let projectDescription;
    // if (this.state.projectDescription === true) {
    //   return projectDescription = (
    //     <div>Test</div>
    //   )
    // }


    return (
      <div>
        <div className="transparent-modal" onClick={this.clearEditTaskForm}></div>
        <li className="task-item-li" 
          key={this.props.task.id}>
          <img 
            src={window.checkURL}
            onClick={this.showEditTaskForm}/>
          <label>
            {this.props.task.name}
          </label>
        </li>
        {/* {projectDescription} */}
      </div>
    )
  }

}

export default TaskIndexItem;