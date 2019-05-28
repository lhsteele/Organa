import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'

// testing:
import * as SessionActions from './actions/session_actions'
import * as ProjectActions from './actions/project_actions'
import * as ListActions from './actions/list_actions'
import * as TaskActions from './actions/task_actions'


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { 
      session: {
        id: window.currentUser.id, first_name: window.currentUser.first_name,
        last_name: window.currentUser.last_name  },
      entities: { users: {[window.currentUser.id]: window.currentUser} }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // testing
  window.signup = SessionActions.signup 
  window.login = SessionActions.login 
  window.logout = SessionActions.logout
  window.getState = store.getState
  window.dispatch = store.dispatch
  window.requestList = ListActions.requestList 
  window.createList = ListActions.createList
  window.requestTasks = TaskActions.requestTasks 
  window.requestTask = TaskActions.requestTask
  window.createTask = TaskActions.createTask
  window.updateTask = TaskActions.updateTask 
  window.deleteTask = TaskActions.deleteTask

  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})