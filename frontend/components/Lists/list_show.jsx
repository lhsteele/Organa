import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../Projects/project_show_container';
import TaskIndexItem from '../Tasks/task_index_item';
import EditTaskFormContainer from '../Tasks/edit_task_form_container';
import TaskModal from '../Tasks/edit_task_views';

class ListShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editTaskForm: false,
      projectDescription: true,
      task: {}
    }
    this.showEditTaskForm = this.showEditTaskForm.bind(this)
  }

  componentDidMount() {
    this.props.requestLists(this.props.projectId)
      .then(lists => {
        this.props.requestTasks(
          Object.keys(lists)[0]
        )
      })
  }

  showEditTaskForm(e) {
    e.stopPropagation();
    this.setState({ editTaskForm: true, projectDescription: false })
  }

  clearEditTaskForm(e) {
    e.stopPropagation();
    this.setState({ editTaskForm: false, projectDescription: true })
  }


  render() {
    let tasks = this.props.tasks.map(task => {
      return (
        <li key={task.id} onClick={() => this.props.openTaskForm(task.id)} className="task-item-li">
          <img src={window.checkURL} />
          {task.name}
        </li>
      )
    })

    // let editTaskForm;
    // if (this.state.editTaskForm === true) {
    //   editTaskForm = (
    //     <div>
    //       Edit Task Form
    //       <TaskModal />
    //     </div>
    //   )
    // }

    // let description;
    // if (this.state.projectDescription === true) {
    //   description = (
    //     <div className="project-description" >
    //       <label className="description">Description</label>
    //       <p className="description-input">{this.props.project.description}</p>
    //     </div >
    //   )
    // }

    return (
      <div className="tasks-main">
        <div className="tasks-index">
          <div className="tasks-index-nav">
            <button className="add-task-button">
              {/* onClick={this.props.createTask(params.list_id)}>  */}
              Add Task
            </button>
          </div>
          <ul className="tasks-ul">
            {tasks}
          </ul>
        </div>
        <TaskModal project={this.props.project}/>
      </div>
    )
  }
}


export default ListShow;