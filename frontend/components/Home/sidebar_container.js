import React from 'react';
import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { requestProjects } from '../../actions/project_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => ({
  first_name: state.session.first_name,
  last_name: state.session.last_name,
  modalType: 'profile',
  projects: Object.values(state.projects),
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  // logoutUser: () => dispatch(logout()),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
  requestProjects: () => dispatch(requestProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)