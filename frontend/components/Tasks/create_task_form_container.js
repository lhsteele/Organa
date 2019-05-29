import { connect } from 'react-redux';
import { createTask, deleteTask } from '../../actions/task_actions';
import { closeElement } from '../../actions/edit_task_actions'
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => ({
  // task: { task_name: "", complete: false, list_id: Object.keys(state.lists)[0]}
  task: state.entities.tasks[state.ui.editTaskUI] || {}, 
  formType: ownProps.formType, 
  list: Object.keys(state.entities.lists)[0]
})

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task)), 
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  closeElement: () => dispatch(closeElement())
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)