import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK
} from '../actions/task_actions';
import { merge } from 'lodash';

const tasksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let task;
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks
    case RECEIVE_TASK:
      return merge({}, state, {[action.task.id]: action.task})
    case REMOVE_TASK:
      newState = Object.assign({}, state);
      delete newState[action.taskId]
      return newState;
    default: 
      return state
  }
}

export default tasksReducer;