import { connect } from 'react-redux';
import { requestLists, updateList } from '../../actions/list_actions';
import { requestTasks, deleteTask } from '../../actions/task_actions';
import { ListShow } from './list_show';

const mapStateToProps = (state, ownProps) => ({
  list: state.lists[ownProps.match.params.listId]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestList: listId => dispatch(requestList(listId)), 
  requestLists: project => dispatch(requestLists(project)),
  updateList: list => dispatch(updateList(list)), 
  requestTasks: list => dispatch(requestTasks(list)), 
  deleteTask: taskId => dispatch(deleteTask(taskId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);