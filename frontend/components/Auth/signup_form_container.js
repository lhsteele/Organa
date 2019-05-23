import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, loginDemo } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
  return {
    errors: errors.session, 
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    formAction: (user) => dispatch(signup(user)),  
    closeModal: () => dispatch(closeModal()),
    loginDemo: () => dispatch(loginDemo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)