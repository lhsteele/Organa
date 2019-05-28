import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';
import { bindActionCreators } from 'redux';

const listsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTS: 
      return action.lists
    case RECEIVE_LIST:
      return Object.assign({}, state, {[action.list.id]: action.list})
    case REMOVE_LIST: 
      let newState = Object.assign({}, state);
      delete newState[action.listId];
      return newState;
    default: 
      return state;
  }
}

export default listsReducer;