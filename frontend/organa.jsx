import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'

// testing:
import * as SessionApiUtil from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  // testing
  window.signup = SessionUtil.signup 
  window.login = SessionUtil.login 
  window.logout = SessionUtil.logout

  ReactDOM.render(<Root />, root)
})