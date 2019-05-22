import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import projectsReducer from './projects_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer, 
  session: sessionReducer, 
  errors: errorsReducer,
  ui: uiReducer,
  projects: projectsReducer
});

export default rootReducer;