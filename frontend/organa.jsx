import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'

// testing:
import * as SessionActions from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { 
      session: { id: window.currentUser.id },
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
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
})