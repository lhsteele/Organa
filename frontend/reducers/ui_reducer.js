import { combineReducers } from 'redux';
import  modal from './modal_reducer';
import editTaskUI from './edit_task_reducer';
import showDesc from './show_description_reducer';

export default combineReducers({
  modal,
  editTaskUI,
  showDesc
})