import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import { requestProjects } from '../../actions/project_actions';
import Home from './home';

const mapStateToProps = state => ({
  first_name: state.session.first_name,
  last_name: state.session.last_name,
  modalType: 'profile',
  projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal()),
  requestProjects: () => dispatch(requestProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)