import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions'
import Home from './home';

const mapStateToProps = ({session}) => ({
  first_name: session.first_name,
  last_name: session.last_name,
  modalType: 'profile'
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
  openModal: modalType => dispatch(openModal(modalType)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)