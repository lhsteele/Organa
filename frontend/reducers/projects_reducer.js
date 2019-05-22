import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT, 
  RECEIVE_PROJECT_ARCHIVED
} from '../actions/project_actions';

const projectsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return action.projects 
    case RECEIVE_PROJECT:
      return Object.assign({}, state, {[action.project.id]: action.project})
    case RECEIVE_PROJECT_ARCHIVED: 
      return action.project.archived
    case REMOVE_PROJECT:
      let newState = Object.assign({}, state);
      delete newState[action.projectId];
      return newState;
    default: 
      return state;
  }
}

export default projectsReducer;