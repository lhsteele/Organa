import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';
import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';


const listsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let task;
  switch(action.type) {
    case RECEIVE_LISTS:
      return action.lists
    case RECEIVE_LIST:
      return Object.assign({}, state, {[action.list.id]: action.list})
    case REMOVE_LIST: 
      let newState = Object.assign({}, state);
      delete newState[action.listId];
      return newState;
    case RECEIVE_TASKS:
      newState = Object.assign({}, state);
      Object.values(action.tasks).forEach(task => {
        if (newState[task.list_id].taskIds) {
          newState[task.list_id].taskIds.push(task.id)
        } else {
          newState[task.list_id].taskIds = [task.id]
        }
      })
      return newState
    case RECEIVE_TASK:
      task = action.task;
      newState = Object.assign({}, state);
      if (newState[task.list_id].taskIds) {
        newState[task.list_id].taskIds.push(task.id)
      } else {
        newState[task.list_id].taskIds = [task.id]
      }
      return newState
    case REMOVE_TASK:
      task = action.task;
      newState = Object.assign({}, state);
      newState[task.list_id].taskIds = newState[task.list_id].taskIds.filter(
        (id) => id !== action.task.id
      )
      return newState;
    default: 
      return state;
  }
}

export default listsReducer;