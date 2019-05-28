import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT, 
  RECEIVE_PROJECT_ARCHIVED
} from '../actions/project_actions';
import {
  RECEIVE_LISTS,
  RECEIVE_LIST,
  REMOVE_LIST
} from '../actions/list_actions';
import { merge } from 'lodash';

const projectsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  let lists;
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects) 
    case RECEIVE_PROJECT:
      return Object.assign({}, state, {[action.project.id]: action.project})
    case RECEIVE_PROJECT_ARCHIVED: 
      let updatedProject = state[action.projectId]
      updatedProject.archived = true;
      return Object.assign({}, state, {[action.projectId]:updatedProject})
    case REMOVE_PROJECT:
      newState = Object.assign({}, state);
      delete newState[action.projectId];
      return newState;
    case RECEIVE_LISTS:
      newState = Object.assign({}, state);
      Object.values(action.lists).forEach(list => {
        if (newState[list.project_id].listIds) {
          newState[list.project_id].listIds.push(list.id)
        } else {
          newState[list.project_id].listIds = [list.id]
        }
      })
      return newState
      case RECEIVE_LIST: 
        list = action.list;
        newState = Object.assign({}, state);
        if (newState[list.project_id].listIds) {
          newState[list.project_id].listIds.push(list.id)
        } else {
          newState[list.project_id].listIds = [list.id]
        }
        return newState
    case REMOVE_LIST:
        list = action.list;
        newState = Object.assign({}, state);
        newState[list.project_id].listIds = newState[list.project_id].listIds.filter(
          (id) => id !== action.list.id
        )
        return newState;
    default: 
      return state;
  }
}

export default projectsReducer;