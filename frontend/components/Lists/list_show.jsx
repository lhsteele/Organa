import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../Projects/project_show_container';
import TaskIndexItemContainer from '../Tasks/task_index_item_container';
import EditTaskFormContainer from '../Tasks/edit_task_form_container';
import TaskModal from '../Tasks/edit_task_views';

class ListShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editTaskForm: false,
      projectDescription: true,
      tasks: []
    }
  }

  componentDidMount() {  
    this.props.requestLists(this.props.projectId)
      .then(lists => {
        this.props.requestTasks(
          Object.keys(lists)[0]
        )
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectId !== this.props.projectId) {
      this.props.requestLists(this.props.projectId)
        .then(lists => {
          this.props.requestTasks(
            Object.keys(lists)[0]
          )
        })
    }
  }

  render() {
    let tasks = this.props.tasks.map(task => {
      return (
        <li key={task.id} onClick={() => this.props.openTaskForm(task.id)} className="task-item-li">
          <img className="task-item-check" src={window.checkURL} />
          {task.name}
        </li>
      )
    })

    return (
      <div className="tasks-main">
        <div className="tasks-index">
          <div className="tasks-index-nav">
            <button className="add-task-button"
              onClick={() => this.props.openTaskForm('new')}> 
              Add Task
            </button>
          </div>
          <ul className="tasks-ul">
            {this.state.tasks ? ( tasks ) : null }
          </ul>
        </div>
        <TaskModal project={this.props.project}/>
      </div>
    )
  }
}


export default ListShow;