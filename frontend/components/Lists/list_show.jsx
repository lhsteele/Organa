import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShow from '../Projects/project_show_container';

class ListShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestList(this.props.project.id)
      .then(() => this.props.requestTasks(this.props.list.id))
  }

  render() {
    debugger
    let tasks = this.props.tasks.forEach(task => {
      return (
        <TaskIndexItem 
          key={task.id}
          task={task}
          deleteTask={this.props.deleteTask}
        />
      )
    })
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

export default ListShow;