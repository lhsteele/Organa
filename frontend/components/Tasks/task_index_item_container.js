import { connect } from 'react-redux';
import { requestLists, updateList } from '../../actions/list_actions';
import { requestTasks, deleteTask } from '../../actions/task_actions';
import { openTaskForm, openDescription } from '../../actions/edit_task_actions';
import { closeElement } from '../../actions/edit_task_actions';
import TaskIndexItem from './task_index_item';

// const mapStateToProps = (state, ownProps) => {
//   const listIds = ownProps.project.listIds || []
//   const list = state.entities.lists[listIds[0]] || {}
//   const taskIds = list.taskIds || []
//   const tasks = taskIds.map(id => (
//     state.entities.tasks[id]
//   ))
//   return ({
//     list: list,
//     tasks: tasks
//   })
// }

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestList: listId => dispatch(requestList(listId)),
  requestLists: project => dispatch(requestLists(project)),
  updateList: list => dispatch(updateList(list)),
  requestTasks: listId => dispatch(requestTasks(listId)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  openTaskForm: taskId => dispatch(openTaskForm(taskId)),
  closeElement: () => dispatch(closeElement()),
  openDescription: taskId => dispatch(openDescription(taskId))
})

export default connect(null, mapDispatchToProps)(TaskIndexItem);