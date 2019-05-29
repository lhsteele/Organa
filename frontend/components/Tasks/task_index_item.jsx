import React from 'react';
import { Link } from 'react-router-dom';
import ListListShow from '../Lists/list_show';
import EditTaskFormContainer from './edit_task_form_container';
import TaskModal from '../Tasks/edit_task_form_container';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <div className="transparent-modal" onClick={this.clearEditTaskForm}></div>
        <li className="task-item-li" 
          key={this.props.task.id}>
          <img 
            src={window.checkURL}/>
          <label>
            {this.props.task.name}
          </label>
        </li>
      </div>
    )
  }

}

export default TaskIndexItem;