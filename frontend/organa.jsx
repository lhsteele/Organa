import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'

// testing:
import * as SessionActions from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // testing
  window.signup = SessionActions.signup 
  window.login = SessionActions.login 
  window.logout = SessionActions.logout
  window.getState = store.getState
  window.dispatch = store.dispatch

  ReactDOM.render(<Root store={store}/>, root)
})