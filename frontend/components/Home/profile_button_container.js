import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProfileButton from './profile_button';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton)