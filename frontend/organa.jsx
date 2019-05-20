import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store'

// testing:
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // testing
  window.signup = SessionApiUtil.signup 
  window.login = SessionApiUtil.login 
  window.logout = SessionApiUtil.logout
  window.getState = store.getstate
  window.dispatch = store.dispatch

  ReactDOM.render(<Root store={store}/>, root)
})