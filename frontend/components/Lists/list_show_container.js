import { connect } from 'react-redux';
import { requestLists, updateList } from '../../actions/list_actions';
import { requestTasks, deleteTask, createTask } from '../../actions/task_actions';
import { openTaskForm, closeElement, openDescription } from '../../actions/edit_task_actions'
import ListShow from './list_show';

const mapStateToProps = (state, ownProps) => {
  const listIds = ownProps.project.listIds || []
  const list = state.entities.lists[listIds[0]] || {}
  const taskIds = list.taskIds || []
  const tasks = taskIds.map(id => (
    state.entities.tasks[id]
  ))
  return ({
    list: list,
    tasks: tasks,
    project: ownProps.project
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestList: listId => dispatch(requestList(listId)),
  requestLists: project => dispatch(requestLists(project)),
  updateList: list => dispatch(updateList(list)),
  requestTasks: listId => dispatch(requestTasks(listId)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  createTask: task => dispatch(createTask(task)),
  openTaskForm: taskId => dispatch(openTaskForm(taskId)), 
  closeElement: () => dispatch(closeElement()),
  openDescription: taskId => dispatch(openDescription(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListShow)





