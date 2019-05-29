import { CLOSE_ELEMENT, OPEN_DESCRIPTION } from '../actions/edit_task_actions';

export default function showDesc(state = null, action) {
  switch (action.type) {
    case CLOSE_ELEMENT:
      return null;
    case OPEN_DESCRIPTION:
      return Object.assign({}, state, { [action.type]: action.taskId })
    default:
      return state;
  }
}