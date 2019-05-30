import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null
})

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // return {[action.user.id]: action.user }
      return { id: action.user.id, first_name: action.user.first_name,
        last_name: action.user.last_name }
    case LOGOUT_CURRENT_USER:
      return _nullUser
    default:
      return state
  }
}

export default sessionReducer;