import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, loginDemo } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session,
    formType: 'login',
    userInfo: {email: '', password: ''}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()), 
    openModal: formType => dispatch(openModal(formType)),
    loginDemo: () => dispatch(loginDemo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);