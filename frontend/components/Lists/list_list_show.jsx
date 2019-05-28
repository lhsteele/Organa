import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../Projects/project_show_container';
import TaskIndexItem from '../Tasks/task_index_item';

class ListListShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestLists(this.props.projectId)
      .then(lists => {
        this.props.requestTasks(
          Object.keys(lists)[0]
        )
      })
    // this.getAllTasks();
  }


  getAllTasks() {
  }
  
  render() {
    let tasks = this.props.tasks.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task}
          deleteTask={this.props.deleteTask}
        />
      )
    }) 
    debugger
    return (
      <div>
        This is the list show page
        <ul>
          {tasks}
        </ul>
      </div>
    )
  }
}

export default ListListShow
