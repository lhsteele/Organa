import React from 'react';
import { connect } from 'react-redux';
import { requestTask, updateTask } from '../../actions/task_actions';
import TaskForm from './task_form';

class EditTaskForm extends React.Component {
  componentDidMount() {
    this.props.requestTask(this.props.match.params.taskId)
  }

  render() {
    return (
      <TaskForm 
        task={task}
        updateTask={updateTask}
      />
    )
  }


}

const mapStateToProps = (state, ownProps) => ({
  task: state.tasks[ownProps.match.params.taskId]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTask: taskId => dispatch(requestTask(taskId)),
  submitEvent: task => dispatch(updateTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)