import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user 
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const receiveSessionErrors = errors => ({  
  type: RECEIVE_SESSION_ERRORS, 
  errors
})

export const login = user => dispatch => SessionApiUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logout = () => dispatch => SessionApiUtil.logout()
  .then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch => SessionApiUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));

const demo = {username: "Leia Organa", password: "password", email: "genOrgana@dantooine.com"}

export const loginDemo = () => dispatch => SessionApiUtil.login(demo)
  .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveSessionErrors(errors.responseJSON)));