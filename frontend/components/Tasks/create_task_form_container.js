import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = state => ({
  task: { task_name: "", complete: false, list_id: Object.keys(state.lists)[0]}
})

const mapDispatchToProps = dispatch => ({
  submitEvent: task => dispatch(createTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)