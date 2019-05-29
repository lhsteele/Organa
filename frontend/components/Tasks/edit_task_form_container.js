import React from 'react';
import { connect } from 'react-redux';
import { requestTask, updateTask } from '../../actions/task_actions';
import TaskForm from './task_form';
import TaskIndexItem from './task_index_item';
import { openTaskForm, closeElement, openDescription } from '../../actions/edit_task_actions'

class EditTaskForm extends React.Component {
  componentDidMount() {
    this.props.requestTask(this.props.task.id)
  }

  render() {
    return (
      <TaskForm 
        task={this.props.task}
        updateTask={updateTask}
      />
    )
  }


}

const mapStateToProps = (state, ownProps) => ({
  task: state.entities.tasks[state.ui.editTaskUI]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestTask: taskId => dispatch(requestTask(taskId)),
  submitEvent: task => dispatch(updateTask(task)),
  closeElement: () => dispatch(closeElement()),
  openDescription: taskId => dispatch(openDescription(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)