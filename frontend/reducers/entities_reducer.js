import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import projectsReducer from './projects_reducer';
import tasksReducer from './tasks_reducer';
import listsReducer from './lists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  tasks: tasksReducer,
  lists: listsReducer
});

export default entitiesReducer;