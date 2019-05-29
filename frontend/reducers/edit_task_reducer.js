import {
  OPEN_TASK_FORM,
  CLOSE_ELEMENT,
  OPEN_DESCRIPTION
} from '../actions/edit_task_actions';

export default function editTaskUI(state = null, action) {
  switch (action.type) {
    case OPEN_TASK_FORM:
      return Object.assign({}, state, { editTaskUI: action.taskId})
    case CLOSE_ELEMENT:
      return null;
    default:
      return state;
  }
}