import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ProfileButtonModal from './profile_button_modal';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButtonModal)